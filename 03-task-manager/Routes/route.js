const express = require("express")
const router = express.Router()

const getAllTasks = require("../Controllers/getAllTasks")
const createTask = require("../Controllers/createTask")
const getSingleTask = require("../Controllers/getSingleTask")
const deleteTask = require("../Controllers/deleteTask")
const updateTask = require("../Controllers/updateTask")

// const url = 

router.route("/tasks")
                .get(getAllTasks)
                .post(createTask)

router.route("/tasks/:id")
                .get(getSingleTask)
                .delete(deleteTask)
                .patch(updateTask)


module.exports = router