const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();
const pool = require('./db');



// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todos;');
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
