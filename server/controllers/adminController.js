import User from '../models/User.js';
import Policy from '../models/Policy.js';
import Issue from '../models/Issue.js';

// @desc    Get admin dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getAdminStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalPolicies = await Policy.countDocuments();
        const totalIssues = await Issue.countDocuments();

        // Detailed stats could be added here
        const activePolicies = await Policy.countDocuments({ status: 'active' });
        const resolvedIssues = await Issue.countDocuments({ status: 'resolved' });

        res.json({
            users: { total: totalUsers },
            policies: { total: totalPolicies, active: activePolicies },
            issues: { total: totalIssues, resolved: resolvedIssues }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export {
    getAdminStats
};
