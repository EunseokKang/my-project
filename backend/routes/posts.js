const express = require('express');
const router = express.Router();
const drizzle = require('../drizzle-config');

router.get('/list', async (_req, res) => {
    try {
        const sql = 'SELECT * FROM posts ORDER BY created_at DESC';
        const [ rows ] = await drizzle.query(sql);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/create', async (req, res) => {
    const { author, title, content } = req.body;

    if (!author || !title || !content) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    try {
        const sql = 'INSERT INTO posts (author, title,content) VALUES (?)';
        const values = [author, title, content];
        await drizzle.query(sql, [values]);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
