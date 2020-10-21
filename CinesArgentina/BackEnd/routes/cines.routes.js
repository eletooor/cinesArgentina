const { Router } = require('express');
const express = require('express');
const router = express.Router();

const cineCtrl = require('../controllers/cines.controller');

router.get('/', cineCtrl.getCines);
router.get('/:id', cineCtrl.getCine);
router.post('/', cineCtrl.createCine);

module.exports = router;