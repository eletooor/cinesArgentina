const { Router } = require('express');
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.controller');
const { route } = require('./cines.routes');

router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUser);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;