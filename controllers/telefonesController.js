const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarTelefones(request,response) {
        try {
        const sql = 'SELECT tel_id, tel_num, pess_id FROM telefones';
        const telefones = await db.query(sql);
        //console.log('tam: ' + instituicoes[0].leight)
        return response.status(200).json(telefones[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarTelefones(request,response) {
        try {
            return response.status(200).json({confirma: 'Telefones'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarTelefones(request,response) {
        try {
            return response.status(200).json({confirma: 'Telefones'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async excluirTelefones(request,response) {
        try {
            return response.status(200).json({confirma: 'Telefones'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
