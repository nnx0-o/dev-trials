import React, { useState } from 'react';

const seed = [
  { id: 1, label: 'A', group: 'alpha', count: 0 },
  { id: 2, label: 'B', group: 'alpha', count: 0 },
  { id: 3, label: 'C', group: 'beta', count: 0 },
];

export default function App() {
  const [items, setItems] = useState(seed);

  function plus(id) {
    const next = items.map((x) => (x.id === id ? { ...x, count: x.count + 1 } : x));
    setItems(next);
  }

  function minus(id) {
    // bug: stale read under rapid clicks can feel inconsistent
    setItems(items.map((x) => (x.id === id ? { ...x, count: x.count - 1 } : x)));
  }

  function resetGroup(group) {
    setItems(items.map((x) => (x.group === group ? { ...x, count: 0 } : x)));
  }

  return (
    <div>
      <h1>Counter Dashboard</h1>
      <button onClick={() => resetGroup('alpha')}>Reset Alpha</button>
      <button onClick={() => resetGroup('beta')}>Reset Beta</button>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {it.label} ({it.group}) = {it.count}
            <button onClick={() => plus(it.id)}>+</button>
            <button onClick={() => minus(it.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
