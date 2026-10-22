import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  carregado: boolean = false;

  constructor(private controleLivros: ControleLivrosService) {}

  ngOnInit(): void {
    // pega os livros da API
    this.controleLivros.obterLivros().then(livros => this.livros = livros);
  }

  excluir(codigo: string): void {
    this.controleLivros.excluir(codigo).then(() => {
      this.controleLivros.obterLivros().then(livros => this.livros = livros);
    });
  }
}
