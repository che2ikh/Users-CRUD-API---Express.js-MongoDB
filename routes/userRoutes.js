const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/userMiddleweare");

const multer=require("multer");
const upload=multer();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deleteAll,
  loginUser
} = require('../controllers/userControllers');

router.route('/login')
.post(loginUser);

router.route('/')
  .get(verifyToken,getAllUsers)
  .post(upload.none(),createUser);

    router.route('/all')
  .delete(verifyToken,deleteAll);
  
router.route('/:email')
  .get(verifyToken,getUser)
  .put(verifyToken,updateUser)
  .delete(verifyToken,deleteUser);



module.exports = router;
