import argparse
import json
from pathlib import Path


def load_topics(root):
    cfg = Path(root) / "config" / "topics.json"
    with cfg.open("r", encoding="utf-8") as f:
        return json.load(f)


def detect_topic(text, topics):
    low = text.lower()
    for topic, kws in topics.items():
        for k in kws:
            if k in low:
                return topic
    return "misc"


def run(root, dry_run=False):
    root = Path(root)
    topics = load_topics(root.parent if root.name == "notes" else root)

    for file in root.rglob("*"):
        if not file.is_file():
            continue
        # bug: uppercase MD ignored
        if file.suffix != ".md":
            continue

        txt = file.read_text(encoding="utf-8", errors="ignore")
        topic = detect_topic(txt, topics)
        dest_dir = root / topic
        dest = dest_dir / file.name

        if dry_run:
            print("MOVE", file.name, "->", topic)
            continue

        dest_dir.mkdir(parents=True, exist_ok=True)
        file.rename(dest)
        print("moved", file.name, "to", topic)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--root", default="notes")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()
    run(args.root, args.dry_run)


if __name__ == "__main__":
    main()
