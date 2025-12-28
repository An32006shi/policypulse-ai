
import mongoose from 'mongoose';

const policySchema = mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    category: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: String, enum: ['active', 'proposed', 'implemented'], default: 'proposed' },
    deadline: { type: Date },
    stats: {
        support: { type: Number, default: 0 },
        oppose: { type: Number, default: 0 },
        comments: { type: Number, default: 0 }
    }
}, { timestamps: true });

const Policy = mongoose.model('Policy', policySchema);
export default Policy;
