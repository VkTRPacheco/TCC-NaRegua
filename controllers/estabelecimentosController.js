const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEstabelecimentos(request,response) {
        try{
            const sql =
            'select est_id, est_nome, est_logo, est_tipo_end, est_nome_end, est_numero, est_bairro, est_complemento, est_cidade, pess_id from estabelecimentos';
          const estabelecimentos = await db.query(sql);
    
          return response.status(200).json(estabelecimentos[0]);
                    } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
    async CadastroEstabelecimentos(request, response) {
        try{
            return response.status(200).json({confirma: "Cadastrar Estabelecimentos"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },async EditarEstabelecimentos(request, response) {
        try{
            return response.status(200).json({confirma: "Editar Estabelecimentos"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },async ExcluirEstabelecimentos(request, response) {
        try{
            return response.status(200).json({confirma: "Excluir Estabelecimentos"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
};