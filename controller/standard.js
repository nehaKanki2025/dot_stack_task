
// controllers/standardController.js
import Standard from '../models/Standard.js';

export const createStandard = async (req, res) => {
  try {
    const { name, subjects } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Standard name is required' });
    }

    const standard = new Standard({ name, subjects });
    await standard.save();

    res.status(201).json(standard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
