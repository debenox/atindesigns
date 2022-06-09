const asyncHandler = require('express-async-handler');
const Designs = require('../models/design-model');

// @desc   get All house designs
// @Route  GET /api/designs
// @access public
const getHousedesigns = asyncHandler(async (req, res) => {
  const designs = await Designs.find({});
  res.send(designs);
});

// @desc   get single house design
// @Route  GET /api/designs/:id
// @access public
const getHousedesignById = asyncHandler(async (req, res) => {
  const design = await Designs.findById(req.params.id);

  if (design) {
    res.json(design);
  } else {
    res.status(404);
    throw new Error('design not found');
  }
});

exports.getHousedesigns = getHousedesigns;
exports.getHousedesignById = getHousedesignById;
