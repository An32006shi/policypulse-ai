
import Policy from '../models/Policy.js';
import Feedback from '../models/Feedback.js';

// @desc    Get all policies
// @route   GET /api/policies
// @access  Public
const getPolicies = async (req, res) => {
    try {
        const policies = await Policy.find({});
        res.json(policies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single policy
// @route   GET /api/policies/:id
// @access  Public
const getPolicyById = async (req, res) => {
    try {
        const policy = await Policy.findById(req.params.id);
        if (policy) {
            res.json(policy);
        } else {
            res.status(404).json({ message: 'Policy not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a policy
// @route   POST /api/policies
// @access  Private/Admin
const createPolicy = async (req, res) => {
    const { title, summary, category, department, deadline } = req.body;

    try {
        const policy = new Policy({
            title,
            summary,
            category,
            department,
            deadline,
            status: 'active'
        });

        const createdPolicy = await policy.save();
        res.status(201).json(createdPolicy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Vote on a policy
// @route   POST /api/policies/:id/vote
// @access  Private
const votePolicy = async (req, res) => {
    const { type } = req.body; // 'support' or 'oppose'

    try {
        const policy = await Policy.findById(req.params.id);

        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }

        // Check if user already voted
        const existingVote = await Feedback.findOne({
            userId: req.user._id,
            policyId: req.params.id,
            type: 'vote'
        });

        if (existingVote) {
            // If changing vote, we could update, but for now let's just say already voted
            // Or better, update the vote.
            if (existingVote.voteType === type) {
                return res.status(400).json({ message: 'You have already voted this way' });
            }

            // Remove old vote count
            if (existingVote.voteType === 'support') policy.stats.support -= 1;
            if (existingVote.voteType === 'oppose') policy.stats.oppose -= 1;

            // Update vote type
            existingVote.voteType = type;
            await existingVote.save();
        } else {
            // Create new vote
            await Feedback.create({
                userId: req.user._id,
                policyId: req.params.id,
                type: 'vote',
                voteType: type
            });
        }

        // Add new vote count
        if (type === 'support') policy.stats.support += 1;
        if (type === 'oppose') policy.stats.oppose += 1;

        await policy.save();

        res.json({ message: 'Vote recorded', stats: policy.stats });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getPolicies, getPolicyById, createPolicy, votePolicy };
