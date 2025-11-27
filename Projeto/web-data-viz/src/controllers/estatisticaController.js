
var estatisticaModel = require("../models/estatisticaModel");

function listarAbates(req, res) {
    var idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        return res.status(400).send("O ID do usuário é obrigatório!");
    }

    console.log("ID usuário recebido:", idUsuario);

    estatisticaModel.buscarAbates(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log("Resultado a enviar para o frontend:", resultado);
                res.json(resultado);
            } else {
                res.status(204).send("Nenhum abate encontrado para este usuário.");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar abates:", erro);
            res.status(500).json(erro);
        });
}

function listarResumo(req, res) {
    var idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        return res.status(400).send("O ID do usuário é obrigatório!");
    }
    
    estatisticaModel.buscarResumo(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado[0]); 
            } else {
                 res.status(204).send("Nenhum resumo encontrado para este usuário.");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar resumo:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listarAbates,
    listarResumo
};