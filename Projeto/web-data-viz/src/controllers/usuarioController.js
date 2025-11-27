var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        return res.status(400).send("Email ou senha inválidos!");
    }

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length == 1) {
                res.json(resultado[0]);
            } else {
                res.status(403).send("Email e/ou senha inválido(s)"); 
            }
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var rank = req.body.rankServer;

    if (!nome || !email || !senha || !rank) {
        return res.status(400).send("Há campos vazios!");
    }

    usuarioModel.cadastrar(nome, email, rank, senha)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
