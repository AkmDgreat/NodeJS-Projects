const { StatusCodes } = require("http-status-codes")
const taskModel = require("../Models/taskModel")

const getSingleTask = async (req, res) => {
    const task = await taskModel.findOne({ _id: req.params.id })
    res.status(StatusCodes.OK).json({ task })
}

module.exports = getSingleTask