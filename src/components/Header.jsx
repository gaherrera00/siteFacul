import React from 'react';
import './Header.css';

function Header({ currentPage, onNavigate }) {
  const handleClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              className={currentPage === 'home' ? 'ativo' : ''}
              onClick={() => handleClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#produtos"
              className={currentPage === 'produtos' ? 'ativo' : ''}
              onClick={() => handleClick('produtos')}
            >
              Produtos
            </a>
          </li>
          <li>
            <a
              href="#contatos"
              className={currentPage === 'contatos' ? 'ativo' : ''}
              onClick={() => handleClick('contatos')}
            >
              Contato
            </a>
          </li>
          <li>
            <a
              href="#encomendas"
              className={currentPage === 'encomendas' ? 'ativo' : ''}
              onClick={() => handleClick('encomendas')}
            >
              Encomendas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
