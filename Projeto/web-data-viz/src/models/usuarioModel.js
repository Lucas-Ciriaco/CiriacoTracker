var database = require("../database/config")

function autenticar(email, senha) {
    console.log("Iniciando autenticação:", email, senha);

    var instrucaoSql = `
        SELECT 
            idUsuario AS id,
            nickname AS nome,
            email,
            ranking,
            senha
        FROM usuario 
        WHERE email = '${email}' 
        AND senha = '${senha}';
    `;

    console.log("Executando SQL:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, rank) {
    console.log("Iniciando cadastro:", nome, email, senha, rank);

    var instrucaoSql = `
        INSERT INTO usuario (nickname, email, ranking, senha) 
        VALUES ('${nome}', '${email}', '${rank}', '${senha}');
    `;

    console.log("Executando SQL:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
