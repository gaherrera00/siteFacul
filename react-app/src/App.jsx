import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Produtos from './pages/Produtos.jsx';
import Encomendas from './pages/Encomendas.jsx';
import Contatos from './pages/Contatos.jsx';

function NotFound() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Página não encontrada</h2>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/encomendas" element={<Encomendas />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
