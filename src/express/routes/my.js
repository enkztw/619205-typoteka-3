"use strict";

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/`, (request, response) => {
  response.render(`my`);
});

myRouter.get(`/comments`, (request, response) => {
  response.send(`/my/comments`);
});

module.exports = myRouter;
