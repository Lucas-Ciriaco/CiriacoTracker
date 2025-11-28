var express = require('express');
var router = express.Router();
var estatisticaController = require('../controllers/estatisticaController');

router.post('/cadastrar', estatisticaController.cadastrar);
router.get('/abates/:idUsuario', estatisticaController.listarAbates);
router.get('/resumo/:idUsuario', estatisticaController.listarResumo);

module.exports = router;
