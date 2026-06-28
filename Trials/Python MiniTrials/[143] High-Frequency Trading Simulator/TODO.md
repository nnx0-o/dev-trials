# TODO: High-Frequency Trading Simulator

Write a Python script simulating an order-book-based high-frequency trading environment.

## Requirements
- Implement a `LimitOrderBook` with separate bid and ask sides, each as a sorted price-level structure (use `sortedcontainers`-style implementation manually)
- Each price level holds a FIFO queue of orders: `Order(order_id, side, price, quantity, timestamp)`
- Operations: `add_order`, `cancel_order`, `modify_order`, matching engine (execute trades when bid ≥ ask), `get_top_of_book`
- Simulate an order feed from a CSV of historical tick data
- Implement a market-making strategy: quote bid/ask around mid-price, manage inventory risk
- Implement a momentum strategy: detect price trends and trade in their direction
- Track P&L per strategy, including transaction costs (configurable)
- Print a live order book display refreshed every 100ms
