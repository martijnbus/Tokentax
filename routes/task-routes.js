const express = require('express')
const taskController = require('../controllers/task-controller')

const router = express.Router(); 

router.get('/:id', taskController.getTask)
module.exports = router;