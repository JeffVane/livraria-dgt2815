var banco = require('./conexao');
var LivroSchema = new banco.Schema({
  titulo:     { type: String },
  codEditora: { type: Number },
  resumo:     { type: String },
  autores:    { type: [String] }
});
var Livro = banco.model('livros', LivroSchema);
module.exports = Livro;
