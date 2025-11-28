var estatisticaModel = require("../models/estatisticaModel");

function cadastrar(req, res) {
    var { idUsuario, idPartida, abates, mortes, assistencias, vitoria, comentarios } = req.body;

    if (!idUsuario || !idPartida) {
        return res.status(400).send("Usuário e Partida são obrigatórios!");
    }

    estatisticaModel.cadastrarEstatistica(idUsuario, idPartida, abates, mortes, assistencias, vitoria, comentarios)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarAbates(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.buscarAbates(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function listarResumo(req, res) {
    var idUsuario = req.params.idUsuario;

    estatisticaModel.buscarResumo(idUsuario)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => res.status(500).json(erro));
}

module.exports = {
    cadastrar,
    listarAbates,
    listarResumo
};
