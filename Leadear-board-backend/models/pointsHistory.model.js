let mongoose = require('mongoose');

let pointsHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    point: {
        type: Number,
        required: true,
    },

}, {timestamps: true});


let PointsHistoryModel = mongoose.model("PointHistory", pointsHistorySchema);
module.exports = PointsHistoryModel;