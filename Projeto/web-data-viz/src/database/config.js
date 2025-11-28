const mysql = require("mysql2");
const mySqlConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "ciriacoTracker"
};

function executar(instrucao, valores = []) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect((err) => {
            if (err) {
                reject(err);
                return;
            }

            conexao.query(instrucao, valores, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                    return;
                }
                resolve(resultados);
            });
        });

        conexao.on('error', function (erro) {
            reject(new Error("ERRO NO MySQL SERVER: " + erro.sqlMessage));
        });
    });
}

module.exports = {
    executar
};
