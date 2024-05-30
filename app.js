const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
