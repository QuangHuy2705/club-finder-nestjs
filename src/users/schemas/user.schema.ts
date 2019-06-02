import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar_url: String,
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
  }]
});