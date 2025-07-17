const UserModel = require("../models/user.model");

let addUser = async (req, res) => {
  try {
    let { userName } = req.body;
    if (!userName) {
      return res.status(401).json({
        success: false,
        message: "Name is required!",
      });
    }

    let count = await UserModel.countDocuments();
    console.log(count);

    let user = await UserModel.create({
      userName,
      points: 0,
      userId: count === 0 ? 1 : count + 1,
    });

    res.status(201).json({
      success: true,
      message: "User added successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: error.message,
    });
  }
};

let getUsers = async (req, res) => {
  try {
    let users = await UserModel.find().sort({ points: -1 });
    res.status(201).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: error.message,
    });
  }
};

let updatePoint = async (req, res) => {
  try {
    let { userId, point } = req.body;
    let user = await UserModel.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    await user.updateOne({$inc: {points: point}});

    res.status(201).json({
      success: true,
      message: "User point updated successfully"
    })

  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
module.exports = {
  addUser,
  getUsers,
  updatePoint,
};
