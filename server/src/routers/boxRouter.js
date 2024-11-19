const boxRouter = require('express').Router();
const { Box } = require('../../db/models');

//
boxRouter.route('/').get(async (req, res) => {
  try {
    const allBoxes = await Box.findAll();
    res.json(allBoxes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, text: 'Ошибка get all box' });
  }
});

//
module.exports = boxRouter;
