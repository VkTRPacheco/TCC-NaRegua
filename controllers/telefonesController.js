const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarTelefones(request,response) {
        try{
            const sql = 'select tel_id, tel_num, pess_id from telefones';
          const telefones = await db.query(sql);
    
          return response.status(200).json(telefones[0]);
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async CadastroTelefones(request, response) {
        try{
            return response.status(200).json({confirma: "Cadastrar Telefones"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async EditarTelefones(request, response) {
        try{
            return response.status(200).json({confirma: "Editar Telefones"});      
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async ExcluirPessoas(request, response) {
        try{
            return response.status(200).json({confirma: "Excluir Telefones"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
};