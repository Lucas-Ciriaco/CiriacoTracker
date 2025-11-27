var database = require("../database/config");

function cadastrarPartida(mapa, duracao, dataPartida) {
    var instrucao = `
        INSERT INTO partida (mapa, duracao, dataPartida)
        VALUES ('${mapa}', ${duracao}, '${dataPartida}');
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

function listarPartidasPorUsuario(idUsuario) {
    var instrucao = `
        SELECT DISTINCT p.idPartida AS id, p.mapa, p.duracao, p.dataPartida
        FROM partida p
        JOIN estatistica e ON e.fkPartida = p.idPartida
        WHERE e.fkUsuario = ${idUsuario}
        ORDER BY p.dataPartida DESC;
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarPartida,
    listarPartidasPorUsuario
};
