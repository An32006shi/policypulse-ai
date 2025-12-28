import Issue from '../models/Issue.js';

// @desc    Get all issues
// @route   GET /api/issues
// @access  Public
export const getIssues = async (req, res) => {
    try {
        const issues = await Issue.find().sort({ createdAt: -1 });
        res.json(issues);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a new issue
// @route   POST /api/issues
// @access  Public (or Private)
export const createIssue = async (req, res) => {
    const { title, description, category, location } = req.body;

    if (!title || !description || !category || !location) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        const issue = await Issue.create({
            title,
            description,
            category,
            location,
            status: 'pending', // Default status
            upvotes: 0
        });

        res.status(201).json(issue);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
