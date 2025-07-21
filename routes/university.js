// routes/university.js
import express from 'express';
import { createUniversity } from '../controller/university.js';

const router = express.Router();

router.post('/', createUniversity);

export default router;
