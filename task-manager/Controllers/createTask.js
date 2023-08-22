const { StatusCodes } = require("http-status-codes")
const taskModel = require("../Models/taskModel")

const createTask = async (req, res) => {
    try {
        const task = await taskModel.create({ name: req.body.name })
        res.status(StatusCodes.OK).json({ task })
    } 
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error })
    }
}

module.exports = createTask