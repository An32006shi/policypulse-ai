import mongoose from 'mongoose';

const issueSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Allow anonymous for now, or require auth if preferred
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['water', 'electricity', 'roads', 'safety', 'sanitation', 'environment', 'education', 'health', 'other']
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'investigating', 'resolved', 'inProgress'],
        default: 'pending'
    },
    upvotes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Issue', issueSchema);
