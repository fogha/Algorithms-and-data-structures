const express = require('express');
const {
  checkBody,
  checkId,
  getAllTours,
  postTours,
  deleteTour,
  updateTours,
  getTour
} = require('./../controllers/tourController');

const Router = express.Router();

Router.param('id', checkId);

Router.route('/')
  .get(getAllTours)
  .post(checkBody, postTours);

Router.route('/:id')
  .get(getTour)
  .patch(updateTours)
  .delete(deleteTour);

module.exports = Router;
