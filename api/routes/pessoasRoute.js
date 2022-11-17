const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router()

router
.get('/pessoas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasPessoas)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.post('/pessoas', PessoaController.criaPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.excluiMatricula)
.delete('/pessoas/:id', PessoaController.excluiPessoa)

module.exports = router;