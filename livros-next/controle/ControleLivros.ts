import { Livro } from '../model/Livro';

const baseURL = 'http://localhost:3030/livros';

// formato que a API devolve (o _id vem do mongo como string)
interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

export class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const resp = await fetch(baseURL);
    const dados: LivroMongo[] = await resp.json();
    return dados.map(d => new Livro(d._id ?? '', d.codEditora, d.titulo, d.resumo, d.autores));
  }

  async incluir(livro: Livro): Promise<boolean> {
    const lm: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const resp = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lm)
    });
    return resp.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const resp = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resp.ok;
  }
}
