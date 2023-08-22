const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarServicos(request,response) {
        try{
            const sql = 'select serv_id, serv_tipo, serv_preco, est_id from servicos';
          const servicos = await db.query(sql);
    
          return response.status(200).json(servicos[0]);
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async CadastroServicos(request, response) {
        try{
            return response.status(200).json({confirma: "Cadastro Serviços"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async EditarServicos(request, response) {
        try{
            return response.status(200).json({confirma: "Editar Serviços"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async ExcluirServicos(request, response) {
        try{
            return response.status(200).json({confirma: "Excluir Serviços"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
};