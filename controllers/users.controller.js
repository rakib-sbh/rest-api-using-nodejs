let users = require("../models/users.model.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const postUserController = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.json({
    message: "User created successfully",
    users,
  });
};

const updateUserController = (req, res) => {
  const { id } = req.params;

  const { name, email } = req.body;

  users = users.map((user) => {
    if (user.id == id) {
      return {
        ...user,
        name,
        email,
      };
    }
    return user;
  });

  const updatedUser = users.filter((user) => user.id == id);

  res.json({
    message: "User updated successfully",
    updatedUser,
  });
};

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deletedUser = users.filter((user) => user.id == id);

  users = users.filter((user) => user.id != id);

  res.json({
    message: "User deleted successfully",
    deletedUser,
  });
};

module.exports = {
  getAllUsers,
  postUserController,
  updateUserController,
  deleteUserController,
};
