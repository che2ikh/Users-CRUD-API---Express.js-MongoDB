const userService = require('../services/userServices');

// GET /api/v1/users
const getAllUsers =async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
         message: 'Error retrieving users', 
         error: err.message
         });
  }
};

// GET /api/v1/users/:id
const getUser = async(req, res) => {
  const id = parseInt(req.params.id);
  const user =await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
};

// POST /api/v1/users
const createUser = async(req, res) => {
  const newUser = await userService.createUser(req.body);
  res.status(201).json(newUser);
};

// PUT /api/v1/users/:id
const updateUser =async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser =await userService.updateUser(id, req.body);
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(updatedUser);
};

// DELETE /api/v1/users/:id
const deleteUser = async(req, res) => {
  const id = parseInt(req.params.id);
  const deletedUser =await userService.deleteUser(id);
  if (!deletedUser) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(deletedUser);
};

module.exports = {
     getAllUsers,
      getUser,
       createUser, 
       updateUser,
        deleteUser
     };
