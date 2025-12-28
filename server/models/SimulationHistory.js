
import mongoose from 'mongoose';

const simulationSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    parameters: {
        taxRate: Number,
        subsidies: Number,
        infraSpending: Number,
        education: Number
    },
    results: {
        employment: Object,
        gdp: Object,
        inflation: Object,
        poverty: Object
    }
}, { timestamps: true });

const SimulationHistory = mongoose.model('SimulationHistory', simulationSchema);
export default SimulationHistory;
