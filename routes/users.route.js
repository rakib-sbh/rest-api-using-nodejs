const {
  getAllUsers,
  postUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", postUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

module.exports = router;
