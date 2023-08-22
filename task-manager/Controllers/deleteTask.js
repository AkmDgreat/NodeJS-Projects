const { StatusCodes } = require("http-status-codes")
const taskModel = require("../Models/taskModel")

const deleteTask = async (req, res) => {
    const taskID = req.params.id
    const task = await taskModel.findOneAndDelete({ _id: taskID })
    res.status(StatusCodes.OK).json({ msg: `deleted task with id ${taskID}` })
}

module.exports = deleteTask