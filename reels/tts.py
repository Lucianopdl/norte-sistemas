"""Genera la locución del reel con ElevenLabs.

Uso:
  1. Crear reels/.env con:
       ELEVENLABS_API_KEY=tu_clave
       ELEVENLABS_VOICE_ID=id_de_la_voz
  2. python3 reels/tts.py            (genera voz/negocio-sin-web/01.mp3 … 06.mp3)
     python3 reels/tts.py 4          (regenera solo la frase 4)

La clave nunca se imprime ni se guarda fuera de reels/.env (ignorado por git).
"""
import json
import os
import sys
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "voz", "negocio-sin-web")

PHRASES = [
    "Cada día alguien busca lo que vendés en Google.",
    "Si no tenés web, ese cliente entra a la web de tu competencia.",
    "Una web bien hecha trabaja mientras dormís.",
    "Muestra tus servicios, responde dudas y te manda consultas directo a WhatsApp.",
    "No es un gasto. Es tu mejor vendedor.",
    "Comentá WEB y te mando un análisis gratis de tu negocio.",
]


def load_env():
    path = os.path.join(ROOT, ".env")
    if os.path.exists(path):
        for line in open(path, encoding="utf-8"):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def tts(key, voice, i):
    body = {
        "text": PHRASES[i],
        "model_id": os.environ.get("ELEVENLABS_MODEL", "eleven_multilingual_v2"),
        # contexto para que la entonación fluya entre frases
        "previous_text": " ".join(PHRASES[:i]) or None,
        "next_text": " ".join(PHRASES[i + 1:]) or None,
        "voice_settings": {"stability": 0.45, "similarity_boost": 0.8, "style": 0.25, "use_speaker_boost": True},
    }
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format=mp3_44100_128",
        data=json.dumps(body).encode(),
        headers={"xi-api-key": key, "Content-Type": "application/json", "Accept": "audio/mpeg"},
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
    except urllib.error.HTTPError as e:
        sys.exit(f"Frase {i + 1}: ElevenLabs respondió {e.code} — {e.read().decode(errors='ignore')[:300]}")
    path = os.path.join(OUT, f"{i + 1:02d}.mp3")
    with open(path, "wb") as f:
        f.write(data)
    print(f"OK {os.path.relpath(path, ROOT)} ({len(data) // 1024} KB)")


if __name__ == "__main__":
    load_env()
    key, voice = os.environ.get("ELEVENLABS_API_KEY"), os.environ.get("ELEVENLABS_VOICE_ID")
    if not key or not voice:
        sys.exit("Falta ELEVENLABS_API_KEY o ELEVENLABS_VOICE_ID en reels/.env")
    os.makedirs(OUT, exist_ok=True)
    only = [int(a) - 1 for a in sys.argv[1:]] or range(len(PHRASES))
    for i in only:
        tts(key, voice, i)
