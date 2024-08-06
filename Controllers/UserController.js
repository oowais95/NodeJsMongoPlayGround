const User = require('../Models/UserModel');




const createUser = async (req, res) => {
  console.log("add user in mongoDB api called ");
  const { name, email, age } = req.body;

  try {
    const newUser = new User({ name, email, age });
    console.log("add user function called from controller");
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser };
