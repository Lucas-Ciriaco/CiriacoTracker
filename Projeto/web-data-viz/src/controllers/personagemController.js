var personagemModel = require("../models/personagemModel");

function listarPersonagens(req, res) {
    personagemModel.listarPersonagens()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPersonagens
};
