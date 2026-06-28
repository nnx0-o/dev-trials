import os
import subprocess
import sys
import time
import urllib.request
import webbrowser
from pathlib import Path


def wait_for_server(url: str, timeout_seconds: int = 20) -> bool:
    start = time.time()
    while time.time() - start < timeout_seconds:
        try:
            with urllib.request.urlopen(url, timeout=1):
                return True
        except Exception:
            time.sleep(0.3)
    return False


def main() -> int:
    root = Path(__file__).resolve().parent
    app_dir = root / "progress-webapp"
    url = "http://localhost:4173"

    if not app_dir.exists():
        print(f"Missing app directory: {app_dir}")
        return 1

    # Install dependencies once if node_modules is missing.
    if not (app_dir / "node_modules").exists():
        print("Installing dependencies...")
        install = subprocess.run(["cmd", "/c", "npm", "install"], cwd=str(app_dir))
        if install.returncode != 0:
            print("Failed to install dependencies.")
            return install.returncode

    print("Starting progress webapp...")
    process = subprocess.Popen(["cmd", "/c", "npm", "start"], cwd=str(app_dir))

    if wait_for_server(url):
        print(f"Opening {url}")
        webbrowser.open(url)
    else:
        print("Server did not become ready in time, but it may still be starting.")
        print(f"Try opening {url} manually.")

    print("Press Ctrl+C to stop the webapp.")
    try:
        process.wait()
    except KeyboardInterrupt:
        print("Stopping webapp...")
        process.terminate()

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
