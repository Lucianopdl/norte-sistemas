"""Servidor local para los reels: sirve esta carpeta y guarda los MP4 exportados en reels/out/."""
import http.server
import os
import re
import urllib.parse

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "out")
PORT = int(os.environ.get("PORT", "4173"))
MAX_BYTES = 300 * 1024 * 1024


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_POST(self):
        url = urllib.parse.urlparse(self.path)
        if url.path != "/save":
            return self.send_error(404)
        name = os.path.basename(urllib.parse.parse_qs(url.query).get("name", ["reel.mp4"])[0])
        if not re.fullmatch(r"[\w.-]+\.(mp4|webm|png|jpg)", name):
            return self.send_error(400, "Nombre inválido")
        size = int(self.headers.get("Content-Length", "0"))
        if size <= 0 or size > MAX_BYTES:
            return self.send_error(413)
        os.makedirs(OUT, exist_ok=True)
        with open(os.path.join(OUT, name), "wb") as f:
            f.write(self.rfile.read(size))
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"ok")


if __name__ == "__main__":
    print(f"Reels en http://localhost:{PORT}/web-24-7.html")
    http.server.ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
