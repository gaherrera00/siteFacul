import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Produtos from "./pages/Produtos.jsx";
import Contatos from "./pages/Contatos.jsx";
import Encomendas from "./pages/Encomendas.jsx";
import PopProdutos from "./pages/PopProdutos.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/encomendas" element={<Encomendas />} />
                <Route path="/produto" element={<PopProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
