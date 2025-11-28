var database = require("../database/config");

function cadastrarEstatistica(idUsuario, idPartida, abates, mortes, assistencias, vitoria, comentarios) {
    var instrucao = `
        INSERT INTO estatistica (fkUsuario, fkPartida, abates, mortes, assistencia, vitoria, comentarios)
        VALUES (${idUsuario}, ${idPartida}, ${abates}, ${mortes}, ${assistencias}, ${vitoria}, '${comentarios}');
    `;
    return database.executar(instrucao);
}

function buscarAbates(idUsuario) {
    var instrucao = `
        SELECT p.dataPartida, e.abates
        FROM estatistica e
        JOIN partida p ON e.fkPartida = p.idPartida
        WHERE e.fkUsuario = ${idUsuario}
        ORDER BY p.dataPartida;
    `;
    return database.executar(instrucao);
}

function buscarResumo(idUsuario) {
    var instrucao = `
        SELECT
            SUM(e.abates) AS totalAbates,
            SUM(e.mortes) AS totalMortes,
            SUM(e.assistencia) AS totalAssistencias,
            SUM(e.vitoria) AS totalVitorias,
            COUNT(DISTINCT e.fkPartida) AS totalPartidas,
            ROUND(SUM(e.abates + e.assistencia) / NULLIF(SUM(e.mortes), 0), 2) AS kda
        FROM estatistica e
        WHERE e.fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrarEstatistica,
    buscarAbates,
    buscarResumo
};
