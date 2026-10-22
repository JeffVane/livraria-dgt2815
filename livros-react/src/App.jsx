import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LivroLista } from './LivroLista';
import { LivroDados } from './LivroDados';

function App() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <Link to="/">Lista de Livros</Link>
        <Link to="/dados">Incluir Livro</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
