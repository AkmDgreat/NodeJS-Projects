const { StatusCodes } = require("http-status-codes")
const taskModel = require("../Models/taskModel")

const updateTask = async (req, res) => {
    const filter = { _id: req.params.id }
    const update = req.body 
    const task = await taskModel.findOneAndUpdate(filter, update, { new: true })
    res.status(StatusCodes.OK).json({ task })
}

module.exports = updateTask