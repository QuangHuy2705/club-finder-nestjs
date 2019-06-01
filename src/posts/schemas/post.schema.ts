import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  description: Number,
  content: String,
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }
});