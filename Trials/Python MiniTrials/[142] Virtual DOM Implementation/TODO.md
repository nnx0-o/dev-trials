# TODO: Virtual DOM Implementation

Write a Python script implementing a virtual DOM library for terminal UIs.

## Requirements
- Implement a `VNode(tag, props, children)` class representing a virtual DOM node
- Implement component functions: `def MyComponent(props): return VNode(...)`
- Implement a `diff(old_vnode, new_vnode)` function that produces a minimal list of patches: `CREATE`, `DELETE`, `REPLACE`, `UPDATE_PROPS`, `REORDER_CHILDREN`
- Implement `patch(real_element, patches)` that applies patches to the terminal UI state
- Implement `render(component, state)` → VNode tree
- Implement a reconciler with `useState` and `useEffect` hooks
- Build a terminal renderer: map VNodes to `curses` draw calls; handle re-renders efficiently using the diff
- Demo: a to-do list app that re-renders only changed lines when the state updates
