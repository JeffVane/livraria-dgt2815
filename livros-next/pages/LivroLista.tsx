import React from 'react';
import { Menu } from '../components/Menu';
import { ControleLivros } from '../controle/ControleLivros';
import { Livro } from '../model/Livro';
import { LinhaLivro } from '../components/LinhaLivro';
import { useState, useEffect } from 'react';

const controleLivros = new ControleLivros();

export default function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  // recarrega quando o carregado muda (feito o excluir)
  useEffect(() => {
    controleLivros.obterLivros().then(livros => {
      setLivros(livros);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => setCarregado(false));
  };

  return (
    <>
      <Menu />
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
    </>
  );
}
