const express = require('express');
const { postOwnerDetails, postLogin, isLogged, postLogOut } = require('../controllers/Busness.controller');

const postOwnerDetailsRouter = express.Router();
const postLoginRouter = express.Router();
const isLoggedRouter = express.Router()
const postLogOutRouter = express.Router();

postOwnerDetailsRouter.post('/', postOwnerDetails);
postLoginRouter.post('/', postLogin)
isLoggedRouter.post('/', isLogged)
postLogOutRouter.post('/', postLogOut)

exports.postOwnerDetailsRouter = postOwnerDetailsRouter;
exports.postLoginRouter = postLoginRouter;
exports.isLoggedRouter = isLoggedRouter;
exports.postLogOutRouter = postLogOutRouter;