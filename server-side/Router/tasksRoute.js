const Express = require('express');

const { getTasks } = require('../Controller/tasksController');

const Router = Express.Router();

Router.get('/', getTasks);

module.exports = Router;
