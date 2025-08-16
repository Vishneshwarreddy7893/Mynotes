const express = require('express');
const Note = require('../models/Note');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// GET all notes
router.get('/', authMiddleware, async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST a new note
router.post('/', authMiddleware, async (req, res) => {
  const { title, listItems } = req.body;
  const newNote = new Note({ title, listItems });
  await newNote.save();
  res.status(201).json(newNote);
});

// UPDATE
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, listItems } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, listItems },
    { new: true }
  );
  res.json(updatedNote);
});

// DELETE
router.delete('/:id', authMiddleware, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;