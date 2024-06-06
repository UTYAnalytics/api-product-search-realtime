const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a simple API' });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
