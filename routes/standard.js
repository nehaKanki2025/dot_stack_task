// routes/standard.js
import express from 'express';
import { createStandard } from '../controller/standard.js';

const router = express.Router();

router.post('/', createStandard);

export default router;
