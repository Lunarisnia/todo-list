'use strict';
const express = require('express');
const { fetchTodoController, fetchTodoIndex } = require('../controllers/todo.controller');
const router = express.Router();

/* GET todo list. */
router.get('/list', fetchTodoIndex)
router.get('/list/:day', fetchTodoController);

module.exports = router;
