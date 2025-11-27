var express = require('express');
var router = express.Router();
var partidaController = require('../controllers/partidaController');

router.post('/cadastrar', partidaController.cadastrarPartida);
router.get('/listar/:idUsuario', partidaController.listarPartidasPorUsuario);

module.exports = router;
