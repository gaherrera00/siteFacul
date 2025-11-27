import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path ? { backgroundColor: "var(--cor-secundaria)", color: "#fff" } : {};

    return (
        <header>
            <div className="logo">
                <img src="/img/logo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={isActive("/")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/produtos" style={isActive("/produtos")}>
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contatos" style={isActive("/contatos")}>
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link to="/encomendas" style={isActive("/encomendas")}>
                            Encomendas
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
