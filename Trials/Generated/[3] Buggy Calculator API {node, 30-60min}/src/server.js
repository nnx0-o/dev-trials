const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

function n(v) {
  return parseInt(v, 10); // bug: decimals truncated
}

app.post('/calc/add', (req, res) => {
  const a = n(req.body.a);
  const b = n(req.body.b);
  res.json({ ok: true, result: a + b });
});

app.post('/calc/sub', (req, res) => {
  const a = n(req.body.a);
  const b = n(req.body.b);
  res.json({ ok: true, result: a - b });
});

app.post('/calc/mul', (req, res) => {
  const a = n(req.body.a);
  const b = n(req.body.b);
  res.json({ ok: true, result: a * b });
});

app.post('/calc/div', (req, res) => {
  const a = n(req.body.a);
  const b = n(req.body.b);
  // bug: divide by zero still returns success
  res.json({ ok: true, result: a / b });
});

const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log('calculator api on', port);
});
