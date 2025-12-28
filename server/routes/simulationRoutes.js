
import express from 'express';
import { saveSimulation } from '../controllers/simulationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, saveSimulation);

export default router;
