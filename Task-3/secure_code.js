const express = require('express');
const app = express();
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

app.use(express.json()); // Use express's inbuilt JSON parser
app.use(helmet());

const users = [
  {
    username: 'admin',
    password: '$2a$15$TrQc8ycOrcaZwYLkTHlIyOOZME4sb3A1qCtqj1TbKUPdidTAq2ZaS'

  }
];

app.post('/login',
  [
    body('username').notEmpty().trim().escape(),
    body('password').notEmpty().trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('❌ Validation failed:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    console.log(`🛂 Received: ${username}, ${password}`);

    const user = users.find(u => u.username === username);
    if (!user) {
      console.log('❌ User not found');
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('🔐 Bcrypt compare result:', isMatch);

    if (!isMatch) {
      console.log('❌ Password mismatch');
      return res.status(401).send('Invalid credentials');
    }

    res.send('✅ Login successful with secure code!');
  }
);

app.listen(3000, () => {
  console.log('🔒 Server running at http://localhost:3000');
});
