// routes/examType.js
import express from 'express';
import { createExamType } from '../controller/examTypeController.js';

const router = express.Router();

router.post('/', createExamType);

export default router;
