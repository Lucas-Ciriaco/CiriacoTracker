var database = require("../database/config");

function cadastrarEstatistica(fkUsuario, fkPartida, fkPersonagem, abates, assistencia, mortes, vitoria, pontos) {
    var instrucao = `
        INSERT INTO estatistica (fkUsuario, fkPartida, fkPersonagem, abates, assistencia, mortes, vitoria, pontos)
        VALUES (${fkUsuario}, ${fkPartida}, ${fkPersonagem}, ${abates}, ${assistencia}, ${mortes}, ${vitoria}, ${pontos});
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

function listarEstatisticasPorPartida(idPartida) {
    var instrucao = `
        SELECT e.fkUsuario AS usuarioId, u.nickname AS usuario, e.fkPersonagem AS personagemId, p.nomePersonagem AS personagem, e.abates, e.assistencia, e.mortes, e.vitoria, e.pontos
        FROM estatistica e
        JOIN usuario u ON u.idUsuario = e.fkUsuario
        JOIN personagem p ON p.idPersonagem = e.fkPersonagem
        WHERE e.fkPartida = ${idPartida};
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

function estatisticasDoUsuario(idUsuario) {
    var instrucao = `
        SELECT SUM(e.abates) AS totalAbates, SUM(e.assistencia) AS totalAssistencias, SUM(e.mortes) AS totalMortes,
               SUM(e.vitoria) AS totalVitorias, SUM(e.pontos) AS totalPontos, COUNT(DISTINCT e.fkPartida) AS partidasJogadas
        FROM estatistica e
        WHERE e.fkUsuario = ${idUsuario};
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarEstatistica,
    listarEstatisticasPorPartida,
    estatisticasDoUsuario
};
