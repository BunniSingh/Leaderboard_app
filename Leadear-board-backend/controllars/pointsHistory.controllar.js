const PointsHistoryModel = require("../models/pointsHistory.model");

let createPointHistory = async (req, res) => {
  try {
    let { userId, point } = req.body;

    if (!userId || !point) {
      return res.status(401).json({
        success: false,
        message: "All fields are required!",
      });
    }

    let createdHistory = await PointsHistoryModel.create({ userId, point });
    await createdHistory.populate("userId", "userName createdAt");
    res.status(201).json({
      success: true,
      message: "Points added in History successfully",
      createdHistory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: error.message,
    });
  }
};

let getAllHistory = async (req, res) => {
  try {
    let data = await PointsHistoryModel.find()
      .populate("userId", "userName createdAt");

    res.status(201).json({
      success: true,
      historyData: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: error.message,
    });
  }
};

module.exports = {
  createPointHistory,
  getAllHistory,
};
