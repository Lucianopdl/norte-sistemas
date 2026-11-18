"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * La "A" de AtlaSys extruida en 3D (three.js). Gira lento, sigue el mouse
 * y se queda quieta con prefers-reduced-motion. `color` = color de la rama.
 */
export const Mark3D = ({ color = '#22D8F5', className = '' }: { color?: string; className?: string }) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';

    const scene = new THREE.Scene();

    // Entorno de estudio para reflejos
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = new THREE.Scene();
    env.background = new THREE.Color(0x020304);
    const panel = (w: number, h: number, x: number, y: number, z: number, k: number) => {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(k, k, k), side: THREE.DoubleSide })
      );
      m.position.set(x, y, z);
      m.lookAt(0, 0, 0);
      env.add(m);
    };
    panel(6, 3, 0, 6, 2, 1.4);
    panel(3, 6, -7, 1, 3, 0.7);
    panel(3, 6, 7, 0, -2, 0.5);
    const envTex = pmrem.fromScene(env, 0.02).texture;
    scene.environment = envTex;

    scene.add(new THREE.HemisphereLight(0xffffff, 0x0b1117, 0.35));
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(color, 40, 14);
    rim.position.set(-3.2, -1.2, -2.6);
    scene.add(rim);
    const rim2 = new THREE.PointLight(color, 18, 12);
    rim2.position.set(3.4, 2.2, -2.4);
    scene.add(rim2);

    const shape = new THREE.Shape();
    [[50, 4], [92, 96], [70, 96], [50, 58], [30, 96], [8, 96]].forEach(([px, py], i) => {
      const x = (px - 50) / 50, y = (50 - py) / 50;
      if (i) shape.lineTo(x, y); else shape.moveTo(x, y);
    });
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.34, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.035, bevelSegments: 8, curveSegments: 4,
    });
    geo.center();
    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color), metalness: 0.1, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 0.55,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    cam.position.set(0, 0, 7.2);

    const resize = () => {
      const w = host.clientWidth, h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let mx = 0, my = 0;
    const onMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', onMove);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(host);
    const t0 = performance.now();
    let rx = 0, ry = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const t = (now - t0) / 1000;
      const targetY = (reduce ? -0.45 : Math.sin(t * 0.5) * 0.55) + mx * 0.9;
      const targetX = -0.1 + my * 0.5;
      ry += (targetY - ry) * 0.06;
      rx += (targetX - rx) * 0.06;
      mesh.rotation.set(rx, ry, 0);
      mesh.position.y = reduce ? 0 : Math.sin(t * 1.1) * 0.06;
      renderer.render(scene, cam);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      geo.dispose();
      mat.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [color]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
};
