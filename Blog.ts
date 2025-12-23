import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    content: string;
    author: mongoose.Types.ObjectId;
    policyId?: mongoose.Types.ObjectId;
    likes: number;
    comments: any[]; // embedded comments for simplicity or ref
    createdAt: Date;
}

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    policyId: { type: Schema.Types.ObjectId, ref: 'Policy' },
    likes: { type: Number, default: 0 },
    comments: [{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        text: String,
        date: { type: Date, default: Date.now }
    }],
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
