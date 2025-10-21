const {User} = require('../models/userModel');
const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');



async function authenticateUser(username, password) {
  // 1. Find user
  const user = await User.findOne({ username });
  if (!user) return null;

  // 2. Check password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return null;

  // 3. Generate token
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  return token;
}
// Get all users
const getUsers = async () => {
  return await User.find();
};

// Get user by ID
const getUserByEmail = async (email) => {
  return await User.findOne({email});
};

// Check if email exists
const existUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return !!user;
};

// Create user
const createUser = async (userData) => {
  
   const hashedPassword = await bcrypt.hash(userData.password, 10); // 10 = salt rounds
  userData.password = hashedPassword;

  const newUser = new User(userData);
  return await newUser.save();
};

// Update user
const updateUser = async (email, updatedData) => {
  return await User.findOneAndUpdate({email}, updatedData, { new: true });
};

// Delete user
const deleteUser = async (email) => {
  return await User.deleteOne({email});
};

const clear = async () => {
  const users = await User.find();
console.log(users.length);
  return await User.deleteMany();
};

module.exports = {
  getUsers,
  getUserByEmail,
  existUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  clear,
  authenticateUser
};
