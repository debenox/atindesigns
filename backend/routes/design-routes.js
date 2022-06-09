const express = require('express');
const router = express.Router();
const housedesignController = require('../controllers/housedesign-controllers');

router.get('/', housedesignController.getHousedesigns);

router.get('/:id', housedesignController.getHousedesignById);

module.exports = router;
