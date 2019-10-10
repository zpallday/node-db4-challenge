const express = require('express');

const routerRecipes = require('./routes/routerRecips');

const server = express();

server.use(express.json());
server.use('/api/recipes', routerRecipes);

module.exports = server;