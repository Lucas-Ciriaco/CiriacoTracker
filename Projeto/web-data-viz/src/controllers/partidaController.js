var partidaModel = require("../models/partidaModel");

function cadastrarPartida(req, res) {
    var mapa = req.body.mapa;
    var duracao = req.body.duracao;
    var dataPartida = req.body.dataPartida;

    if (!mapa || duracao == undefined || !dataPartida) {
        return res.status(400).send("Dados da partida incompletos");
    }

    partidaModel.cadastrarPartida(mapa, duracao, dataPartida)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarPartidasPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    partidaModel.listarPartidasPorUsuario(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarPartida,
    listarPartidasPorUsuario
};
