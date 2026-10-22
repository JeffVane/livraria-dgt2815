export const LinhaLivro = ({ livro, excluir }) => {
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.codEditora}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};
