
import Subject from '../models/Subject.js';

export const createSubject = async (req, res) => {
  try {
    const subject = new Subject({ name: req.body.name });
    await subject.save();
    res.status(201).json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
