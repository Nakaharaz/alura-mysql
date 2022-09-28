const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router()

router
.get('/pessoas', PessoaController.pegaTodasPessoas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.post('/pessoas', PessoaController.criaPessoa)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.delete('/pessoas/:id', PessoaController.excluiPessoa)

module.exports = router;