import express from 'express';
import {registerInstitute } from '../controller/register.js';

const router = express.Router();

router.post('/register', registerInstitute);

export default router;
