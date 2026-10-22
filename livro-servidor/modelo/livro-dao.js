var Livro = require('./livro-schema');

var obterLivros = async () => await Livro.find();

var incluir = async (livro) => await Livro.create(livro);

var excluir = async (codigo) => await Livro.deleteOne({ _id: codigo });

module.exports = { obterLivros, incluir, excluir };
