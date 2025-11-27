var express = require('express');
var router = express.Router();
var personagemController = require('../controllers/personagemController');

router.get('/listar', personagemController.listarPersonagens);

module.exports = router;
