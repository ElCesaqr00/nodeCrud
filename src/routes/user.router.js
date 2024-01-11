const { getAll, create, getOne, remove, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
	.get(getAll)
	.post(create)

userRouter.route("/users/:id")
	.get(getOne)
	.delete(remove)
	.path(update);

module.exports = userRouter;
