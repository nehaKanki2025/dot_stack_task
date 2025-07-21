// controllers/examTypeController.js
import ExamType from '../models/ExamType.js';

export const createExamType = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Exam type name is required' });
    }

    const examType = new ExamType({ name });
    await examType.save();

    res.status(201).json(examType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
