
import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    policyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy', required: true },
    type: { type: String, enum: ['vote', 'comment'], required: true },
    voteType: { type: String, enum: ['support', 'oppose'] }, // Only if type is 'vote'
    comment: { type: String }, // Only if type is 'comment'
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
