const Express = require('express');

const { getAllUsers } = require('../Controller/usersController');

const Router = Express.Router();

Router.get('/', getAllUsers);

module.exports = Router;
