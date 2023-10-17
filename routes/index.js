const express = require('express');
const route = express.Router();
// connecting controller
const homeController = require('../controller/home_controller.js');
const addTask = require('../controller/add_tasks');
const removeTask = require('../controller/remove_tasks');
const toggleTask = require('../controller/toggle_tasks');
// calling controller
route.get('/',homeController.home); 
route.post('/add-task',addTask.add);
route.get('/remove-task/',removeTask.remove);
route.post('/change-status',toggleTask.change);
// route.post('/remove-task',homeController.renove);
module.exports = route;