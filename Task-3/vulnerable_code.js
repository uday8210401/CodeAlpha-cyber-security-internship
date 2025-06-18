const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = [
  { username: 'admin', password: 'admin123' } // Hardcoded credentials
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // No validation or sanitization
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
