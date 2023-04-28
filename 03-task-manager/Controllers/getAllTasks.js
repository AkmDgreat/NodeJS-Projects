const { StatusCodes } = require("http-status-codes")
const taskModel = require("../Models/taskModel")

const getAllTasks = async (req, res) => {
    const tasks = await taskModel.find({})
    res.status(StatusCodes.OK).json({ tasks, count: tasks.length })
}

module.exports = getAllTasks