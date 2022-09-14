'use strict';

const findTodo = require("../services/findTodo");

const TODO_INDEX = {
    monday: ['monday', 'mon'],
    tuesday: ['tuesday', 'tue'],
    wednesday: ['wednesday', 'wed'],
    thursday: ['thursday', 'thu'],
    friday: ['friday', 'fri'],
    saturday: ['saturday', 'sat'],
    sunday: ['sunday', 'sun']
}

const fetchTodoIndex = (req, res) => {
    try {
        res.send({ data: TODO_INDEX })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            name: 'InternalServerError',
            message: 'Error'
        });
    }
}

const fetchTodoController = (req, res) => {
    try {
        const day = req.params.day;
        res.send({ data: findTodo(day) });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            name: 'InternalServerError',
            message: 'Error'
        });
    }
}

module.exports = { fetchTodoController, fetchTodoIndex }