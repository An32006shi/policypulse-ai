
import Feedback from '../models/Feedback.js';
import Policy from '../models/Policy.js';

// @desc    Add a comment to a policy
// @route   POST /api/feedback/:policyId/comment
// @access  Private
const addComment = async (req, res) => {
    const { content } = req.body;
    const { policyId } = req.params;

    try {
        const policy = await Policy.findById(policyId);
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }

        const feedback = await Feedback.create({
            userId: req.user._id,
            policyId,
            type: 'comment',
            comment: content
        });

        policy.stats.comments += 1;
        await policy.save();

        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get comments for a policy
// @route   GET /api/feedback/:policyId
// @access  Public
const getComments = async (req, res) => {
    try {
        const comments = await Feedback.find({
            policyId: req.params.policyId,
            type: 'comment'
        }).populate('userId', 'name');

        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @desc    Get all feedback (community issues)
// @route   GET /api/feedback
// @access  Public
const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find({ type: 'comment' })
            .populate('userId', 'name')
            .populate('policyId', 'title')
            .sort({ createdAt: -1 });
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { addComment, getComments, getAllFeedback };
