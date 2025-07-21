import express from 'express';
import Subject from '../models/Subject.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const subject = new Subject({ name: req.body.name });
    await subject.save();
    res.status(201).json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
