import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Livro } from './model/Livro';
import { ControleLivros } from './controle/ControleLivros';

const controleLivros = new ControleLivros();

const editoras = [
  { cod: 1, nome: 'Alta Books' },
  { cod: 2, nome: 'Pearson' },
  { cod: 3, nome: 'Person' },
  { cod: 4, nome: 'Wiley' },
  { cod: 5, nome: 'McGraw Hill' }
];

export const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [codEditora, setCodEditora] = useState(1);
  const [autores, setAutores] = useState('');
  const navigate = useNavigate();

  const incluir = () => {
    // cada autor em uma linha no textarea
    const livro = new Livro(
      '',
      codEditora,
      titulo,
      resumo,
      autores.split('\n').map(a => a.trim()).filter(a => a.length > 0)
    );
    controleLivros.incluir(livro).then(() => navigate('/'));
  };

  return (
    <main className="container">
      <h1>Dados do Livro</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          incluir();
        }}
      >
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="resumo">Resumo</label>
        <textarea
          id="resumo"
          value={resumo}
          onChange={(e) => setResumo(e.target.value)}
        />

        <label htmlFor="editora">Editora</label>
        <select
          id="editora"
          value={codEditora}
          onChange={(e) => setCodEditora(Number(e.target.value))}
        >
          {editoras.map((ed) => (
            <option key={ed.cod} value={ed.cod}>
              {ed.nome}
            </option>
          ))}
        </select>

        <label htmlFor="autores">Autores (um por linha)</label>
        <textarea
          id="autores"
          value={autores}
          onChange={(e) => setAutores(e.target.value)}
        />

        <button type="submit">Incluir</button>
      </form>
    </main>
  );
};
