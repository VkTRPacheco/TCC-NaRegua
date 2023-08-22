const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarAgendas(request,response) {
        try {
            const sql =
             'SELECT agd_id, pess_id, serv_id, agd_dia, agd_horario, agd_pagamento, agd_valor_pago from agendas'  ;
            const agendas = await db.query(sql);
      
            return response.status(200).json(agendas[0]);
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async CadastroAgendas(request, response) {
          try {
      
            return response.status(200).json({ confirma: "Cadastrar Agendas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async EditarAgendas(request, response) {
          try {
            return response.status(200).json({ confirma: "Editar Agendas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async EditarAgendas(request, response) {
          try {
            return response.status(200).json({ confirma: "Editar Agendas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
        async ExcluirAgendas(request, response) {
          try {
            return response.status(200).json({ confirma: "Excluir Agendas" });
          } catch (error) {
            return response.status(500).json({ confirma: "Erro", message: error });
          }
        },
      };
      