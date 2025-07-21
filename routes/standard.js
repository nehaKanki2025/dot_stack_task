// routes/standard.js
import express from 'express';
import { createStandard } from '../controller/standardController.js';

const router = express.Router();

router.post('/', createStandard);

export default router;
