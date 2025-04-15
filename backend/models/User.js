import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  category: { type: String },
}, { timestamps: true });

// Pre-save middleware to generate username from email    
userSchema.pre('save', function(next) {
  if (!this.username) {
    this.username = this.email.split('@')[0];
  }
  next();
});

const User = mongoose.model('User', userSchema);
export default User;


