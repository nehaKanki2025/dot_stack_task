import express from 'express';
import University from '../models/University.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const university = new University({ name: req.body.name });
    await university.save();
    res.status(201).json(university);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
