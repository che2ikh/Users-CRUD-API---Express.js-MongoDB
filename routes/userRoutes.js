const express = require('express');
const router = express.Router();

const multer=require("multer");
const upload=multer();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deleteAll
} = require('../controllers/userControllers');

router.route('/')
  .get(getAllUsers)
  .post(upload.none(),createUser);

    router.route('/all')
  .delete(deleteAll);
  
router.route('/:email')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);



module.exports = router;
