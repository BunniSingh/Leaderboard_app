let express = require("express");
const { createPointHistory, getAllHistory } = require("../controllars/pointsHistory.controllar");
let pointHistoryRouter = express.Router();

pointHistoryRouter.post('/create', createPointHistory);
pointHistoryRouter.get('/', getAllHistory);

module.exports = pointHistoryRouter;