import express from 'express';
import { getIssues, createIssue } from '../controllers/issueController.js';

const router = express.Router();

router.route('/').get(getIssues).post(createIssue);

export default router;
