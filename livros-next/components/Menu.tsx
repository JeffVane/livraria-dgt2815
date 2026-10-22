import React from 'react';
import Link from 'next/link';

export const Menu = () => {
  return (
    <nav className="menu">
      <Link href="/LivroLista">Lista de Livros</Link>
      <Link href="/LivroDados">Incluir Livro</Link>
    </nav>
  );
};
