const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router()

router
.get('/pessoas', PessoaController.pegaTodasPessoas)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.post('/pessoas', PessoaController.criaPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.excluiMatricula)

module.exports = router;