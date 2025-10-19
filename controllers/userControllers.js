const {
  getUsers,
  getUserByEmail,
  existUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  clear
} = require('../services/userServices');

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: `${err.message} hiii` });
  }
};

// GET user by ID
const getUser = async (req, res) => {
  try {
    const user = await getUserByEmail(req.params.email);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create user
const createUserHandler = async (req, res) => {
  try {
    const { email } = req.body;
    if (await existUserByEmail(email)) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update user
const updateUserHandler = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.email, req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE user
const deleteUserHandler = async (req, res) => {
  try {
    const deletedUser = await deleteUser(req.params.email);
    if (!deletedUser) 
      return res.status(404).json({ message: 'User not found' });
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAll=async(req,res)=>{
try{
const deleteStatus=await clear();

    if (deleteStatus.deletedCount === 0) {
      return res.status(404).json({ message: 'No users to delete' });
    }

    res.json({ message: 'All users deleted', deletedCount: deleteStatus.deletedCount });

}catch(err){
  res.status(500).json({error:err.message});
}
}

module.exports = {
  getAllUsers,
  getUser,
  createUser: createUserHandler,
  updateUser: updateUserHandler,
  deleteUser: deleteUserHandler,
  deleteAll
};
