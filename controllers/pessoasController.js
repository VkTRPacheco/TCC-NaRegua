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
            return response.status(200).json({confirma: 'Pessoas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarPessoas(request,response) {
        try {
            return response.status(200).json({confirma: 'Pessoas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirPessoas(request,response) {
        try {
            return response.status(200).json({confirma: 'Pessoas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
