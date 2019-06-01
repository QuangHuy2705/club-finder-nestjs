import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  // author: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User'
  // }
  author: String,
});