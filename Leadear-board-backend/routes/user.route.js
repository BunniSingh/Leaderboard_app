let express = require("express");
const { addUser, getUsers, updatePoint } = require("../controllars/user.controllar");
let userRouter = express.Router();

userRouter.post("/add", addUser);
userRouter.get("/", getUsers);
userRouter.post("/update/point", updatePoint);


module.exports = userRouter;