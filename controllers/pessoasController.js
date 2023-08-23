const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPessoas(request,response) {
        try {            
        const sql = 'SELECT pess_id, pess_nome, pess_cpf, pess_cidade, pess_cep, pess_cliente, pess_email, pess_senha FROM pessoas;';
        const pessoas = await db.query(sql);
        //console.log('tam: ' + instituicoes[0].leight)
        return response.status(200).json(pessoas[0]);
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
},
async cadastrarPessoas(request,response) {
    try {
        // Parametros passados via corpo da requisiçao
        const { pess_nome, pess_cpf, pess_cidade, pess_cep, pess_cliente, pess_email, pess_senha } = request.body;
        // Instrução sql inserção
        const sql = 'INSERT INTO pessoas (pess_nome, pess_cpf, pess_cidade, pess_cep, pess_cliente, pess_email, pess_senha) VALUES (?,?,?,?,?,?,?)';
        // Definição de array com os parametros que receberam os valores do front-end
        const values = [pess_nome, pess_cpf, pess_cidade, pess_cep, pess_cliente, pess_email, pess_senha];
        // Executa a instrução de inserção no banco de dados
        const confirmacao = await db.query(sql, values);
        // Exibe o id do registro inserido
        const pess_id = confirmacao[0].insertId;
        // Mensagem de retorno no formato JSON
        return response.status(200).json({confirma: 'Cadastrar Pessoas'});
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
},
async editarPessoas(request,response) {
    try {
        return response.status(200).json({confirma: 'Editar Pessoas'});
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
},
async excluirPessoas(request,response) {
    try {
        return response.status(200).json({confirma: 'Excluir Pessoas'});
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }
},
};

