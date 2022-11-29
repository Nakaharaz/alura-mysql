const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaTodasPessoas)
  .get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas)
  .get("/pessoas/ativas", PessoaController.pegaPessoasAtivas)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
  .get(
    "/pessoas/matricula/:turmaId/confirmadas",
    PessoaController.pegaMatriculasPorTurma
  )
  .post("/pessoas", PessoaController.criaPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post(
    "/pessoas/:estudanteId/matricula/:matriculaId/restaura",
    PessoaController.restauraMatricula
  )
  .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizaMatricula
  )
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.excluiMatricula
  )
  .delete("/pessoas/:id", PessoaController.excluiPessoa);

module.exports = router;
