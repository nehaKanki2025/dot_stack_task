import express from 'express';
import { createBoard } from '../controller/boardController.js';

const router = express.Router();

router.post('/', createBoard);

export default router;
