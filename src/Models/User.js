import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    displayName: { type: String },
    favoriteBooks: [{ type: String }], // Array of book IDs
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
