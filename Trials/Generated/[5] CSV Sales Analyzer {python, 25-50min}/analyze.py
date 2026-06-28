import csv
from collections import defaultdict


def load_rows(path):
    rows = []
    with open(path, newline='', encoding='utf-8') as f:
        r = csv.DictReader(f)
        for row in r:
            rows.append(row)
    return rows


def summarize(rows):
    total = 0.0
    by_region = defaultdict(lambda: defaultdict(float))

    for row in rows:
        qty = int(row['qty'])
        price = float(row['price'])
        disc = float(row['discount'])  # bug: crashes when discount empty
        net = qty * price * (1 - disc)

        total += net
        by_region[row['region']][row['product']] += net

    print('Total revenue:', round(total, 2))
    print('Top product by region:')
    for region, items in by_region.items():
        top = sorted(items.items(), key=lambda x: x[1], reverse=True)[0]
        print('-', region, '=>', top[0], round(top[1], 2))


def main():
    import sys
    path = sys.argv[1] if len(sys.argv) > 1 else 'data/sales.csv'
    rows = load_rows(path)
    summarize(rows)


if __name__ == '__main__':
    main()
