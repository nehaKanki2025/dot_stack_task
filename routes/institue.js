import express from 'express';
import {registerInstitute } from '../controller/register.js';

const router = express.Router();

router.post('/', registerInstitute);

export default router;
