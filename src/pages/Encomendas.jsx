import { useState } from "react";
import Header from "../components/Header.jsx";

function formatarValor(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}

const CLIENTES_INICIAIS = [
    {
        nome: "Carolina",
        produto: "Pirulitos coloridos (10 unidades)",
        qtde: 2,
        unitario: 50,
    },
    {
        nome: "Margarete",
        produto: "Combo Brigadeiros (6 unidades)",
        qtde: 2,
        unitario: 30,
    },
    {
        nome: "Daniele",
        produto: "Fatia de bolo (Creme)",
        qtde: 1,
        unitario: 25,
    },
    {
        nome: "Daniele",
        produto: "Fatia de bolo (Chocolate)",
        qtde: 0,
        unitario: 25,
    },
];

export default function Encomendas() {
    const [clientes, setClientes] = useState(CLIENTES_INICIAIS);
    const [buscar, setBuscar] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const nome = form.nome.value.trim();
        const produto = form.produto.value;
        const quantidade = Number(form.quantidade.value);
        const valorUnitario = Number(form.valor.value);

        if (!nome || !produto || quantidade <= 0 || valorUnitario <= 0) return;

        setClientes((prev) => [
            ...prev,
            {
                nome,
                produto,
                qtde: quantidade,
                unitario: valorUnitario,
            },
        ]);

        form.reset();
    }

    function handleDoubleClick(index) {
        const confirmar = window.confirm(
            "Tem certeza que deseja excluir essa linha?"
        );
        if (!confirmar) return;

        setClientes((prev) => prev.filter((_, i) => i !== index));
    }

    const clientesFiltrados = clientes.filter((c) =>
        c.nome.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
        <>
            <Header />

            <h2>Encomendas</h2>

            <div className="buscar">
                <h4>Buscar clientes:</h4>
                <input
                    type="search"
                    id="buscar"
                    name="buscar"
                    placeholder="Nome do cliente"
                    value={buscar}
                    onChange={(e) => setBuscar(e.target.value)}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor unitario</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="tabelaClientes">
                    {clientesFiltrados.map((cliente, index) => {
                        const { nome, produto, qtde, unitario } = cliente;
                        const total =
                            qtde > 0 && !isNaN(unitario)
                                ? formatarValor(qtde * unitario)
                                : "XXX";

                        return (
                            <tr
                                key={index}
                                className="cliente"
                                onDoubleClick={() => handleDoubleClick(index)}
                            >
                                <td className="nome">{nome}</td>
                                <td className="produtoCliente">{produto}</td>
                                <td className="qtde">{qtde}</td>
                                <td className="unitario">{formatarValor(unitario)}</td>
                                <td className="total">{total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <section className="form-contato">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Fazer Pedido</legend>

                        <label htmlFor="nome">Nome do Cliente:</label>
                        <input type="text" id="nome" name="nome" required />

                        <label htmlFor="produto">Produto:</label>
                        <select id="produto" name="produto" required>
                            <option value="">Selecione um produto</option>
                            <option value="Brigadeiro Gourmet">Brigadeiro Gourmet</option>
                            <option value="Bolo de Morango">Bolo de Morango</option>
                            <option value="Doce Vegano">Doce Vegano</option>
                            <option value="Caixa Personalizada">Caixa Personalizada</option>
                            <option value="Pudim de Leite">Pudim de Leite</option>
                            <option value="Trufa de Maracujá">Trufa de Maracujá</option>
                            <option value="Mini Cheesecake">Mini Cheesecake</option>
                            <option value="Cookies com Gotas de Chocolate">
                                Cookies com Gotas de Chocolate
                            </option>
                            <option value="Bombom de Uva">Bombom de Uva</option>
                            <option value="Doce de Leite com Nozes">
                                Doce de Leite com Nozes
                            </option>
                            <option value="Rocambole de Chocolate">
                                Rocambole de Chocolate
                            </option>
                            <option value="Torta Banoffee">Torta Banoffee</option>
                        </select>

                        <label htmlFor="quantidade">Quantidade:</label>
                        <input
                            type="number"
                            id="quantidade"
                            name="quantidade"
                            min="1"
                            required
                        />

                        <label htmlFor="valor">Valor Unitário (R$):</label>
                        <input
                            type="number"
                            id="valor"
                            name="valor"
                            min="0.01"
                            step="0.01"
                            required
                        />

                        <input type="submit" value="Enviar Pedido" />
                    </fieldset>
                </form>
            </section>

            <footer className="footer">
                <div className="footer-logo">
                    <img src="/img/logo.png" alt="Logo Doces JAE" />
                </div>
                <div className="footer-links">
                    <p>© 2025 Doces JAE - Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    );
}
