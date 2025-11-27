var database = require("../database/config");

function autenticar(email, senha) {
    var instrucao = `
        SELECT 
            idUsuario AS id,
            nickname AS nome,
            email,
            ranking
        FROM usuario
        WHERE email = '${email}'
        AND senha = '${senha}';
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, ranking, senha) {
    var instrucao = `
        INSERT INTO usuario (nickname, email, ranking, senha)
        VALUES ('${nome}', '${email}', '${ranking}', '${senha}');
    `;
    console.log("Executando SQL: \n", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};
