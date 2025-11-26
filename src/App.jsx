import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import PopProduct from './pages/PopProduct.jsx';
import './components/Header.css';
import './components/Footer.css';

function App() {
  const [page, setPage] = useState('home');
  const params = new URLSearchParams(window.location.search);
  const isPopup = params.get('popup') === 'produto';

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setPage(hash);
    }

    const handleHashChange = () => {
      const novaPagina = window.location.hash.replace('#', '') || 'home';
      setPage(novaPagina);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (novaPagina) => {
    setPage(novaPagina);
  };

  if (isPopup) {
    return <PopProduct />;
  }

  let conteudo = null;
  if (page === 'home') {
    conteudo = <HomePage />;
  } else if (page === 'produtos') {
    conteudo = <ProductsPage />;
  } else if (page === 'contatos') {
    conteudo = <ContactPage />;
  } else {
    conteudo = <OrdersPage />;
  }

  return (
    <div className="app-container">
      <Header currentPage={page} onNavigate={handleNavigate} />
      {conteudo}
      <Footer />
    </div>
  );
}

export default App;
