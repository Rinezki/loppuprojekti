const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
app.use(express.json());

const saltRounds = 10;
const secret = process.env.JWT_SECRET;

// Register
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return res.status(500).json({ error: 'Hashing failed' });

    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
    db.run(query, [username, hash], function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(400).json({ error: 'Username already exists' });
        }
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'User registered', userId: this.lastID });
    });
  });
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = ?`;
  db.get(query, [username], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!user) return res.status(400).json({ error: 'User not found' });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(500).json({ error: 'Comparison error' });
      if (!result) return res.status(400).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ userId: user.id, username: user.username }, secret, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    });
  });
});

// Middleware to verify token
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Missing token' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });

    req.user = decoded;
    next();
  });
}

// Protected route
app.get('/secret', authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, this is a protected route!` });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


