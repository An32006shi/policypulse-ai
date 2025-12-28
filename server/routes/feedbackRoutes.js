
import express from 'express';
import { addComment, getComments, getAllFeedback } from '../controllers/feedbackController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllFeedback);
router.get('/:policyId', getComments);
router.post('/:policyId/comment', protect, addComment);

export default router;
