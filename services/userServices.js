const {User} = require('../models/userModel');

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
  clear
};
