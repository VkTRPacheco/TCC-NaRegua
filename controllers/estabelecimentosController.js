const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEstabelecimentos(request,response) {
        try {
            return response.status(200).json({confirma: 'Estabelecimentos'});
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

