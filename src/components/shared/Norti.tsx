import React from 'react';

const MARK = 'M6 96 L6 34 L24 34 L70 80 L70 28 L62 28 L79 2 L96 28 L88 28 L88 96 L70 96 L24 50 L24 96 Z';
const EQ = [14, 26, 38, 30, 22, 34, 16];

// Norti: mascota pixel de Norte Sistemas (misma figura que en Instagram).
export const Norti = ({ className = '', wave = true }: { className?: string; wave?: boolean }) => (
  <svg viewBox="0 0 360 500" className={className} role="img" aria-label="Norti, la mascota de Norte Sistemas">
    <defs>
      <linearGradient id="norti-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#7B8DFF" /><stop offset="1" stopColor="#2E46E6" />
      </linearGradient>
    </defs>
    <ellipse cx="180" cy="486" rx="118" ry="12" fill="#0B1030" fillOpacity=".25" />
    <rect x="104" y="410" width="48" height="64" rx="8" fill="#2E46E6" stroke="#fff" strokeWidth="6" />
    <rect x="208" y="410" width="48" height="64" rx="8" fill="#2E46E6" stroke="#fff" strokeWidth="6" />
    <rect x="10" y="282" width="34" height="86" rx="10" fill="#3A52F0" stroke="#fff" strokeWidth="6" />
    <g className={wave ? 'norti-wave' : undefined} style={{ transformOrigin: '335px 270px' }}>
      <rect x="318" y="186" width="34" height="86" rx="10" fill="#3A52F0" stroke="#fff" strokeWidth="6" transform="rotate(-28 335 270)" />
    </g>
    <rect x="175" y="64" width="10" height="80" rx="5" fill="#fff" />
    <path d="M180 18 L212 66 L148 66 Z" fill="#FFC94D" stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
    <rect x="40" y="140" width="280" height="280" rx="38" fill="url(#norti-body)" stroke="#fff" strokeWidth="8" />
    <rect x="68" y="172" width="224" height="150" rx="24" fill="#0B1030" />
    <g className="norti-eyes">
      <rect x="116" y="204" width="36" height="36" fill="#7CE7FF" /><rect x="122" y="210" width="10" height="10" fill="#EAFBFF" />
      <rect x="208" y="204" width="36" height="36" fill="#7CE7FF" /><rect x="214" y="210" width="10" height="10" fill="#EAFBFF" />
    </g>
    {EQ.map((h, i) => (
      <rect key={i} x={117 + i * 18} y={290 - h / 2} width="12" height={h} fill={i % 2 ? '#B794FF' : '#D9C8FF'} />
    ))}
    <rect x="150" y="342" width="60" height="60" rx="14" fill="#0E1240" />
    <path d={MARK} fill="#fff" transform="translate(160 352) scale(.4)" />
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        .norti-wave { animation: norti-wave 2.4s ease-in-out infinite; }
        .norti-eyes { animation: norti-blink 4s step-end infinite; transform-origin: 180px 222px; }
      }
      @keyframes norti-wave { 0%, 60%, 100% { transform: rotate(0deg); } 70% { transform: rotate(-14deg); } 80% { transform: rotate(6deg); } 90% { transform: rotate(-10deg); } }
      @keyframes norti-blink { 0%, 92% { transform: scaleY(1); } 94% { transform: scaleY(.15); } 96% { transform: scaleY(1); } }
    `}</style>
  </svg>
);
