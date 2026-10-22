var { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (e) {
    res.json({ mensagem: 'Erro ao obter livros' });
  }
});

router.post('/', async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ mensagem: 'Inclusao efetuada' });
  } catch (e) {
    res.json({ mensagem: 'Erro na inclusão' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await excluir(req.params.id);
    res.json({ mensagem: 'Exclusão efetuada' });
  } catch (e) {
    res.json({ mensagem: 'Erro na exclusão' });
  }
});

module.exports = router;
