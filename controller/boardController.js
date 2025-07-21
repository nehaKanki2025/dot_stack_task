
import Board from '../models/Board.js';

export const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    const board = new Board({ name });
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
