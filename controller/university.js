// controllers/universityController.js
import University from '../models/University.js';

export const createUniversity = async (req, res) => {
  try {
    const university = new University({ name: req.body.name });
    await university.save();
    res.status(201).json(university);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};