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
router.get('/agendas', AgendasController.listarAgendas); //listar
router.post('/agendas', AgendasController.cadastrarAgendas); //cadastrar
router.patch('/agendas', AgendasController.editarAgendas); //editar
router.delete('/agendas', AgendasController.excluirAgendas); //excluir



// definição de rotas
router.get('/estabelecimentos', EstabelecimentosController.listarEstabelecimentos); //listar
router.post('/estabelecimentos', EstabelecimentosController.cadastrarEstabelecimentos); //cadastrar
router.patch('/estabelecimentos', EstabelecimentosController.editarEstabelecimentos); //editar
router.delete('/estabelecimentos', EstabelecimentosController.excluirEstabelecimentos); //excluir



// definição de rotas
router.get('/pessoas', PessoasController.listarPessoas); //listar
router.post('/pessoas', PessoasController.cadastrarPessoas); //cadastrar
router.patch('/pessoas', PessoasController.editarPessoas); //editar
router.delete('/pessoas', PessoasController.excluirPessoas); //excluir



// definição de rotas
router.get('/servicos', ServicosController.listarServicos); //listar
router.post('/servicos', ServicosController.cadastrarServicos); //cadastrar
router.patch('/servicos', ServicosController.editarServicos); //editar
router.delete('/servicos', ServicosController.excluirServicos); //excluir



// definição de rotas
router.get('/telefones', TelefonesController.listarTelefones); //listar
router.post('/telefones', TelefonesController.cadastrarTelefones); //cadastrar
router.patch('/telefones', TelefonesController.editarTelefones); //editar
router.delete('/telefones', TelefonesController.excluirTelefones); //excluir

module.exports = router;