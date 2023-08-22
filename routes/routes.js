const db = require("..//database/connection");
const express = require('express');
const router = express.Router();

// importação dos controlers utilizados nas rotas
const AgendasController = require('../controllers/agendasController');
const EstabelecimentosController = require('../controllers/estabelecimentosController');
const PessoasController = require('../controllers/pessoasController');
const ServicosController = require('../controllers/servicosController');
const TelefonesController = require('../controllers/telefonesController');


// definição de rotas
router.get("/Agendas", AgendasController.listarAgendas); //Listar
router.post("/Agendas", AgendasController.CadastroAgendas); //Cadastro
router.patch("/Agendas", AgendasController.EditarAgendas); //Editar
router.delete("/Agendas", AgendasController.ExcluirAgendas); //Excluir

module.exports = router;

// definição de rotas
router.get('/estabelecimentos', EstabelecimentosController.listarEstabelecimentos);
router.get("/Estabelecimentos",EstabelecimentosController.listarEstabelecimentos);
router.post("/Estabelecimentos",EstabelecimentosController.CadastroEstabelecimentos);
router.patch("/Estabelecimentos",EstabelecimentosController.EditarEstabelecimentos);
router.delete("/Estabelecimentos",EstabelecimentosController.ExcluirEstabelecimentos);
module.exports = router;

// definição de rotas
router.get("/Pessoas", PessoasController.listarPessoas); //Listar
router.post("/Pessoas", PessoasController.CadastroPessoas); //Cadastro
router.patch("/Pessoas", PessoasController.EditarPessoas); //Editar
router.delete("/Pessoas", PessoasController.ExcluirPessoas); //Excluir

module.exports = router;

// definição de rotas
router.get("/Servicos", ServicosController.listarServicos); //Listar
router.post("/Servicos", ServicosController.CadastroServicos); //Cadastro
router.patch("/Servicos", ServicosController.EditarServicos); //Editar
router.delete("/Servicos", ServicosController.ExcluirServicos); //Excluir

module.exports = router;

// definição de rotas
router.get("/Telefones", TelefonesController.listarTelefones); //Listar
router.post("/Telefones", TelefonesController.CadastroTelefones); //Cadastro
router.patch("/Telefones", TelefonesController.EditarTelefones); //Editar
router.delete("/Telefones", TelefonesController.ExcluirPessoas); //Excluir

module.exports = router;