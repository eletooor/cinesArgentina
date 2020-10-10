const { Router } = require('express');
const express = require('express');
const router = express.Router();

const cineCtrl = require('../controllers/cines.controller');

router.get('/', cineCtrl.getCines);

module.exports = router;