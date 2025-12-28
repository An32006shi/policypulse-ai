
import express from 'express';
import { getPolicies, getPolicyById, createPolicy, votePolicy } from '../controllers/policyController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getPolicies).post(protect, admin, createPolicy);
router.route('/:id').get(getPolicyById);
router.route('/:id/vote').post(protect, votePolicy);

export default router;
