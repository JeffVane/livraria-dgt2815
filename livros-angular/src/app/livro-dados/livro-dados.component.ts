import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
  livro: Livro = new Livro();
  autores: string = '';
  editoras = [
    { cod: 1, nome: 'Alta Books' },
    { cod: 2, nome: 'Pearson' },
    { cod: 3, nome: 'Person' },
    { cod: 4, nome: 'Wiley' },
    { cod: 5, nome: 'McGraw Hill' }
  ];

  constructor(private controleLivros: ControleLivrosService, private router: Router) {}

  incluir(): void {
    // autores um por linha no textarea
    this.livro.autores = this.autores
      .split('\n')
      .map(a => a.trim())
      .filter(a => a.length > 0);
    this.controleLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}
