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
router.get('/agendas', AgendasController.listarAgendas);
// cadastrar
// editar
// excluir

module.exports = router;

// definição de rotas
router.get('/estabelecimentos', EstabelecimentosController.listarEstabelecimentos);
// cadastrar
// editar
// excluir

module.exports = router;

// definição de rotas
router.get('/pessoas', PessoasController.listarPessoas);
// cadastrar
// editar
// excluir

module.exports = router;

// definição de rotas
router.get('/servicos', ServicosController.listarServicos);
// cadastrar
// editar
// excluir

module.exports = router;

// definição de rotas
router.get('/telefones', TelefonesController.listarTelefones);
// cadastrar
// editar
// excluir

module.exports = router;