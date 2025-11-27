import Header from "../components/Header.jsx";

function formatarDataAtual() {
    const diasSemana = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
    ];
    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ];

    const hoje = new Date();
    const diaSemana = diasSemana[hoje.getDay()];
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

export default function Produtos() {
    function abrirDetalhes(nome, imagem, descricao) {
        const url = `/produto?nome=${encodeURIComponent(
            nome
        )}&imagem=${encodeURIComponent(imagem)}&descricao=${encodeURIComponent(
            descricao
        )}`;
        window.open(url, "_blank", "width=800,height=700");
    }

    return (
        <>
            <Header />

            <header>
                <div className="data-topo">
                    <p id="data-atual" style={{ margin: "10px 0", fontWeight: "bold" }}>
                        {formatarDataAtual()}
                    </p>
                </div>
                <div className="logo">
                    <img src="/img/logo.png" alt="Logo da Doces JAE" />
                </div>
            </header>

            <main>
                <section id="produtos" className="produtos">
                    <h2>Nossos Produtos</h2>
                    <div className="produtos-grid">
                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Brigadeiro Gourmet",
                                    "/img/brigadeiro.jpg",
                                    "Delicioso brigadeiro feito com chocolate belga."
                                )
                            }
                        >
                            <img src="/img/brigadeiro.jpg" alt="Brigadeiro Gourmet" />
                            <div className="produto-info">
                                <h3>Brigadeiro Gourmet</h3>
                                <p>Delicioso brigadeiro feito com chocolate belga.</p>
                                <span className="preco">R$ 3,50</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Bolo de Morango",
                                    "/img/bolo.jpg",
                                    "Bolo recheado com morangos frescos e chantilly."
                                )
                            }
                        >
                            <img src="/img/bolo.jpg" alt="Bolo de Morango" />
                            <div className="produto-info">
                                <h3>Bolo de Morango</h3>
                                <p>Bolo recheado com morangos frescos e chantilly.</p>
                                <span className="preco">R$ 45,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Doce Vegano",
                                    "/img/vegan.jpg",
                                    "Feito sem ingredientes de origem animal, super saboroso!"
                                )
                            }
                        >
                            <img src="/img/vegan.jpg" alt="Doce Vegano" />
                            <div className="produto-info">
                                <h3>Doce Vegano</h3>
                                <p>Feito sem ingredientes de origem animal, super saboroso!</p>
                                <span className="preco">R$ 6,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Caixa Personalizada",
                                    "/img/personalizado.jpg",
                                    "Monte sua própria caixa com os doces que preferir."
                                )
                            }
                        >
                            <img src="/img/personalizado.jpg" alt="Caixa Personalizada" />
                            <div className="produto-info">
                                <h3>Caixa Personalizada</h3>
                                <p>Monte sua própria caixa com os doces que preferir.</p>
                                <span className="preco">A partir de R$ 30,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Pudim de Leite",
                                    "/img/pudim.jpg",
                                    "Clássico pudim de leite condensado com calda de caramelo."
                                )
                            }
                        >
                            <img src="/img/pudim.jpg" alt="Pudim de Leite" />
                            <div className="produto-info">
                                <h3>Pudim de Leite</h3>
                                <p>Clássico pudim de leite condensado com calda de caramelo.</p>
                                <span className="preco">R$ 8,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Trufa de Maracujá",
                                    "/img/trufa-maracuja.jpg",
                                    "Recheio cremoso de maracujá com cobertura de chocolate."
                                )
                            }
                        >
                            <img
                                src="/img/trufa-maracuja.jpg"
                                alt="Trufa de Maracujá"
                            />
                            <div className="produto-info">
                                <h3>Trufa de Maracujá</h3>
                                <p>Recheio cremoso de maracujá com cobertura de chocolate.</p>
                                <span className="preco">R$ 4,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Mini Cheesecake",
                                    "/img/cheesecake.jpg",
                                    "Base de biscoito com creme de queijo e geleia de frutas vermelhas."
                                )
                            }
                        >
                            <img src="/img/cheesecake.jpg" alt="Mini Cheesecake" />
                            <div className="produto-info">
                                <h3>Mini Cheesecake</h3>
                                <p>
                                    Base de biscoito com creme de queijo e geleia de frutas
                                    vermelhas.
                                </p>
                                <span className="preco">R$ 9,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Cookies com Gotas de Chocolate",
                                    "/img/cookies.jpg",
                                    "Biscoitos crocantes por fora e macios por dentro."
                                )
                            }
                        >
                            <img
                                src="/img/cookies.jpg"
                                alt="Cookies com Gotas de Chocolate"
                            />
                            <div className="produto-info">
                                <h3>Cookies com Gotas de Chocolate</h3>
                                <p>Biscoitos crocantes por fora e macios por dentro.</p>
                                <span className="preco">R$ 4,50</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Bombom de Uva",
                                    "/img/bombom-uva.jpg",
                                    "Uva envolta em brigadeiro e coberta com chocolate."
                                )
                            }
                        >
                            <img src="/img/bombom-uva.jpg" alt="Bombom de Uva" />
                            <div className="produto-info">
                                <h3>Bombom de Uva</h3>
                                <p>Uva envolta em brigadeiro e coberta com chocolate.</p>
                                <span className="preco">R$ 3,50</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Doce de Leite com Nozes",
                                    "/img/doce-leite-nozes.jpg",
                                    "Combinação cremosa de doce de leite e nozes crocantes."
                                )
                            }
                        >
                            <img
                                src="/img/doce-leite-nozes.jpg"
                                alt="Doce de Leite com Nozes"
                            />
                            <div className="produto-info">
                                <h3>Doce de Leite com Nozes</h3>
                                <p>Combinação cremosa de doce de leite e nozes crocantes.</p>
                                <span className="preco">R$ 5,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Rocambole de Chocolate",
                                    "/img/rocambole.jpg",
                                    "Massa leve recheada com creme de chocolate."
                                )
                            }
                        >
                            <img src="/img/rocambole.jpg" alt="Rocambole de Chocolate" />
                            <div className="produto-info">
                                <h3>Rocambole de Chocolate</h3>
                                <p>Massa leve recheada com creme de chocolate.</p>
                                <span className="preco">R$ 7,00</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>

                        <div
                            className="produto"
                            onClick={() =>
                                abrirDetalhes(
                                    "Torta Banoffee",
                                    "/img/banoffee.jpg",
                                    "Torta com banana, doce de leite e chantilly."
                                )
                            }
                        >
                            <img src="/img/banoffee.jpg" alt="Torta Banoffee" />
                            <div className="produto-info">
                                <h3>Torta Banoffee</h3>
                                <p>Torta com banana, doce de leite e chantilly.</p>
                                <span className="preco">R$ 9,50</span>
                                <button className="botao-personalizado">Comprar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer" id="contato">
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
