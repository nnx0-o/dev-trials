export type Todo = {
  id: number;
  text: string;
  done: boolean;
  due?: string;
};

let todos: Todo[] = [
  { id: 1, text: 'write report', done: false, due: '2026-07-01' },
  { id: 2, text: 'fix bug', done: false, due: '2026-06-20' }
];

export function getTodos() {
  return todos;
}

export function editTodo(id: number, text: string) {
  const t = todos.find((x) => x.id === id);
  if (t) t.text = text;
}

export function toggleTodo(id: number) {
  const copy = [...todos];
  const t = copy.find((x) => x.id === id);
  if (t) t.done = !t.done;
  todos = copy;
}

export function sortedByDue(enabled: boolean) {
  if (!enabled) return todos;
  return [...todos].sort((a, b) => (a.due || '').localeCompare(b.due || ''));
}
