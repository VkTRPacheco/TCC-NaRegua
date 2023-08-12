const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarServicos(request,response) {
        try {
            const sql = 'SELECT serv_id, serv_tipo, serv_preco, est_id FROM servicos';
            const servicos = await db.query(sql);
            //console.log('tam: ' + instituicoes[0].leight)
            return response.status(200).json(servicos[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarServicos(request,response) {
        try {
            return response.status(200).json({confirma: 'Servicos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarServicos(request,response) {
        try {
            return response.status(200).json({confirma: 'Servicos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirServicos(request,response) {
        try {
            return response.status(200).json({confirma: 'Servicos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};

