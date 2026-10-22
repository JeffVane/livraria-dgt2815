var banco = require('mongoose');
var options = { useUnifiedTopology: true, useNewUrlParser: true };
banco.connect('mongodb://localhost/livraria', options);
module.exports = banco;
