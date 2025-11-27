import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/contatos">Contato</NavLink>
          </li>
          <li>
            <NavLink to="/encomendas">Encomendas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
