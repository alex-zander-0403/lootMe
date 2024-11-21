const boxRouter = require('express').Router();
const { Box } = require('../../db/models');

//
boxRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allBoxes = await Box.findAll({
        order: [['id', 'DESC']],
      });
      res.json(allBoxes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка get all box' });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, img, price } = req.body;
      const newBox = await Box.create({ title, img, price, userId: null });
      res.status(201).json(newBox);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка post box' });
    }
  });

boxRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const thisBox = await Box.findOne({ where: { id } });
      res.json(thisBox);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка get box' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Box.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка удаления box' });
    }
  });

//
module.exports = boxRouter;
