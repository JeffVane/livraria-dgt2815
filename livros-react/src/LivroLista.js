import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { LinhaLivro } from './LinhaLivro';

const controleLivros = new ControleLivros();

export const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // procura de novo sempre que carregado mudar (excluir volta pra false e recarrega)
  useEffect(() => {
    controleLivros.obterLivros().then(livros => {
      setLivros(livros);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivros.excluir(codigo).then(() => setCarregado(false));
  };

  return (
    <main className="container">
      <h1>Lista de Livros</h1>
      <table className="tabela">
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};
