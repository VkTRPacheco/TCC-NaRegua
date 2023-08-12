const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarTelefones(request,response) {
        try {
            return response.status(200).json({confirma: 'Telefones'});
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
