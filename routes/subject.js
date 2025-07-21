// routes/subject.js
import express from 'express';
import { createSubject } from '../controller/subject.js';

const router = express.Router();

router.post('/', createSubject);

export default router;
