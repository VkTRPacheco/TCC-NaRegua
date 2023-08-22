const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPessoas(request,response) {
        try {
            const sql =
              'select pess_id, pess_nome, pess_cpf, pess_cidade, pess_tipo, pess_cep, pess_tipo, pess_email, pess_senha from pessoas';
            const pessoas = await db.query(sql);
      
            return response.status(200).json(pessoas[0]);
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async CadastroPessoas(request, response) {
          try {
            return response.status(200).json({ confirma: "Cadastrar Pessoas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async EditarPessoas(request, response) {
          try {
            return response.status(200).json({ confirma: "Editar Pessoas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async ExcluirPessoas(request, response) {
          try {
            return response.status(200).json({ confirma: "Excluir Pessoas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
      };
      