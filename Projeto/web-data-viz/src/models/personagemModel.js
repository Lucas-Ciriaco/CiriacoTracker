var database = require("../database/config");

function listarPersonagens() {
    var instrucao = `
        SELECT idPersonagem AS id, nomePersonagem AS nome, funcao
        FROM personagem
        ORDER BY nomePersonagem;
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarPersonagens
};
