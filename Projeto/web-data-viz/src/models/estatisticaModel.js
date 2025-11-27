// models/estatisticaModel.js
var database = require("../database/config");

function buscarAbates(idUsuario) {
    var instrucao = `
        SELECT 
            p.dataPartida,
            e.abates
        FROM estatistica e
        JOIN partida p ON e.fkPartida = p.idPartida
        WHERE e.fkUsuario = ?
        ORDER BY p.dataPartida;
    `;
    return database.executar(instrucao, [idUsuario]); 
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
        WHERE e.fkUsuario = ?;
    `;
    return database.executar(instrucao, [idUsuario]);
}

module.exports = {
    buscarAbates,
    buscarResumo
};