const express = require('express');
const asyncHandler = require('express-async-handler');
const Designs = require('../models/design-model');
const designs = require('../data/designs');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    res.json(designs);
  })
);

router.get('/:id', (req, res) => {
  const design = designs.find((d) => d._id === req.params.id);
  res.json(design);
});

module.exports = router;
