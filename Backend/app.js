const express = require('express');
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

// Ota CORS käyttöön ja JSON-parser
app.use(cors());
app.use(express.json());

// Avaa OSRS item -tietokanta
const db = new sqlite3.Database('osrs_items.db');

// Avaa Forum-tietokanta
const forumDb = new sqlite3.Database('forum.db');


// ==============================
// OSRS Item API:t
// ==============================

// Hae itemit nimen perusteella
app.get('/api/items/search', (req, res) => {
    const nameQuery = req.query.name?.toLowerCase();
  
    if (!nameQuery) {
      return res.status(400).json({ error: 'Item name is required' });
    }
  
    db.all(
      'SELECT id, name FROM items WHERE LOWER(name) LIKE ?',
      [`%${nameQuery}%`],
      (err, rows) => {
        if (err) {
          return res.status(500).json({ error: 'Database error' });
        }
        if (rows.length === 0) {
          return res.status(404).json({ error: 'No items found' });
        }
  
        res.json(rows);
      }
    );
});

// Hae itemin hinta id:n perusteella
app.get('/getItemPrice', async (req, res) => {
    const { id } = req.query;
  
    if (!id) {
      return res.status(400).json({ error: 'Item ID is required' });
    }
  
    try {
      const url = `https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${id}`;
      const response = await axios.get(url);
      const itemData = response.data?.item;

      if (!itemData || !itemData.current || typeof itemData.current.price === 'undefined') {
        return res.status(404).json({ error: 'Item price data not found' });
      }

      res.json({ 
        price: itemData.current.price, 
        priceChange: itemData.today?.price ?? 'N/A' 
      });

    } catch (error) {
      console.error('RuneScape API Error:', error.response?.data || error.message);
      res.status(500).json({ error: 'Error fetching price from RuneScape API' });
    }
});

// ==============================
// Forum API:t
// ==============================

// Hae kaikki postaukset
app.get('/api/posts', (req, res) => {
  forumDb.all('SELECT * FROM posts ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

// Lisää uusi postaus
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  forumDb.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({
      id: this.lastID,
      title,
      content,
      created_at: new Date().toISOString()
    });
  });
});


// ==============================
// Käynnistä serveri
// ==============================
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
