let express = require('express');
let cors = require("cors")
let mongoose = require("mongoose");
const userRouter = require('./routes/user.route');
const pointHistoryRouter = require('./routes/pointHistory.route');
let app = express();
require("dotenv").config();

let port = process.env.PORT;

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://leaderboard-app-sigma.vercel.app'],
    credentials: true,
  })
);
app.use(express.json())
app.use('/api/v1/user', userRouter);
app.use('/api/v1/point/history', pointHistoryRouter);

mongoose.connect(`${process.env.DB_CONNECTION_STRING}/Leader-Board`)
    .then(()=> console.log("DB Connected successFuly✅"))
    .catch((err)=> console.log("DB Connection failed❌", err));


app.listen(port, ()=> console.log("Server started on port number: ", port))


