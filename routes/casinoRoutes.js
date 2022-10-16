import express from 'express';
import { getAllCasino } from '../controllers/casinoController.js';
const router = express.Router();

router.get('/', getAllCasino);

export default router;