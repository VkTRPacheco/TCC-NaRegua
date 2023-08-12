const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEstabelecimentos(request,response) {
        try {
            const sql = 'SELECT est_id, est_nome, est_logo, est_tipo_end, est_nome_end, est_numero, est_bairro, est_complemento, est_cidade, pess_id FROM estabelecimentos';
            const estabelecimentos = await db.query(sql);
            //console.log('tam: ' + instituicoes[0].leight)
            return response.status(200).json(estabelecimentos[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarEstabelecimentos(request,response) {
        try {
            return response.status(200).json({confirma: 'Estabelecimentos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarEstabelecimentos(request,response) {
        try {
            return response.status(200).json({confirma: 'Estabelecimentos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirEstabelecimentos(request,response) {
        try {
            return response.status(200).json({confirma: 'Estabelecimentos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};

