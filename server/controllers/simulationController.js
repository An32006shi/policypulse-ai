
import SimulationHistory from '../models/SimulationHistory.js';

// @desc    Save simulation result
// @route   POST /api/simulation
// @access  Private
const saveSimulation = async (req, res) => {
    const { parameters, results } = req.body;

    try {
        const simulation = await SimulationHistory.create({
            userId: req.user._id,
            parameters,
            results
        });

        res.status(201).json(simulation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { saveSimulation };
