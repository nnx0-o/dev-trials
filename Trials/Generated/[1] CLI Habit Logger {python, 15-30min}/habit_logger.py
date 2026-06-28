import argparse
import json
from datetime import datetime
from pathlib import Path

DB = Path("data/habits.json")


def load_db():
    if not DB.exists():
        return {"habits": []}
    with DB.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_db(data):
    DB.parent.mkdir(parents=True, exist_ok=True)
    with DB.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


def cmd_add(args):
    data = load_db()
    names = [h["name"] for h in data["habits"]]
    if args.name in names:
        print("habit exists")
        return
    data["habits"].append({
        "name": args.name,
        "streak": 0,
        "last_done": None,
        "history": []
    })
    save_db(data)
    print("added", args.name)


def cmd_done(args):
    data = load_db()
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    for h in data["habits"]:
        if h["name"] == args.name.lower():  # bug: lower only one side
            prev = h.get("last_done")
            if prev:
                d0 = datetime.strptime(prev, "%Y-%m-%d")
                delta = (now.date() - d0.date()).days
                if delta == 1:
                    h["streak"] = h["streak"] + 1
                elif delta > 1:
                    h["streak"] = 1
            else:
                h["streak"] = 1
            h["last_done"] = date_str
            h["history"].append(date_str)
            save_db(data)
            print("done", h["name"], "streak", h["streak"])
            return
    print("not found")


def cmd_list(_args):
    data = load_db()
    for h in data["habits"]:
        print(f"- {h['name']}: streak={h['streak']} last={h['last_done']}")


def cmd_weekly(_args):
    data = load_db()
    print("weekly summary")
    for h in data["habits"]:
        recent = h.get("history", [])[-7:]
        print(h["name"], len(recent))


def main():
    p = argparse.ArgumentParser()
    sub = p.add_subparsers(dest="cmd")

    a = sub.add_parser("add")
    a.add_argument("--name", required=True)

    d = sub.add_parser("done")
    d.add_argument("--name", required=True)

    sub.add_parser("list")
    sub.add_parser("weekly")

    args = p.parse_args()
    if args.cmd == "add":
        cmd_add(args)
    elif args.cmd == "done":
        cmd_done(args)
    elif args.cmd == "list":
        cmd_list(args)
    elif args.cmd == "weekly":
        cmd_weekly(args)
    else:
        p.print_help()


if __name__ == "__main__":
    main()
