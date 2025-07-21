import express from 'express';
import { createClassCategory } from '../controller/classCategory.js';


const router = express.Router();

router.post('/', createClassCategory);

export default router;