import Header from "../components/Header.jsx";

export default function Home() {
    return (
        <>
            <Header />

            <img className="banner" src="/img/banner.jpeg" alt="Banner" />

            <h2>Sobre nos</h2>

            <div className="historia">
                <div className="ilustracao">
                    <img src="/img/imagemIlustrativa.webp" alt="" />
                </div>
                <div className="sobrenos">
                    <h3>A História da JAE: Construindo o Futuro, Uma Loja de Cada Vez</h3>
                    <p>
                        A história da JAE começou com um sonho simples, mas audacioso:
                        transformar o mercado de lojas e espaços comerciais com qualidade,
                        inovação e um toque único. Fundada por um grupo de visionários
                        apaixonados pelo que fazem, a JAE nasceu com o objetivo de fornecer
                        soluções completas para quem deseja abrir uma loja ou ponto de venda
                        que se destacasse no mercado.
                    </p>
                    <p>
                        Tudo começou com a percepção de que muitas lojas e estabelecimentos
                        comerciais careciam de um design inteligente e funcional. Era preciso
                        mais do que apenas vender produtos – era necessário criar
                        experiências. E foi isso que a JAE fez. Desde o início, com uma
                        pequena equipe de arquitetos, designers e engenheiros, a fábrica
                        começou a produzir móveis e estruturas personalizadas, pensadas para
                        atender às necessidades dos empreendedores que queriam mais do que o
                        convencional.
                    </p>
                    <p>
                        Com o tempo, a JAE não apenas se especializou na fabricação de lojas
                        sob medida, mas também ampliou sua produção para incluir componentes
                        modulares e sustentáveis, sempre com foco na durabilidade e no
                        respeito ao meio ambiente. O que antes era uma pequena fábrica se
                        tornou uma referência no setor, atendendo clientes de diferentes
                        partes do Brasil e até do exterior.
                    </p>
                    <p>
                        A missão da JAE sempre foi criar soluções inteligentes e funcionais
                        para transformar qualquer espaço comercial em um ambiente único, que
                        atraísse clientes e refletisse a identidade dos empresários. Em cada
                        projeto, colocamos a nossa paixão pelo design, a nossa dedicação pela
                        excelência e o nosso compromisso com a inovação.
                    </p>
                    <p>
                        Hoje, a JAE é mais do que uma fábrica de lojas – somos parceiros dos
                        nossos clientes, ajudando a materializar os seus sonhos e a levar seus
                        negócios a novos patamares. A cada loja que criamos, nossa história
                        continua a ser escrita, sempre com a mesma missão: transformar espaços
                        em experiências.
                    </p>
                </div>
            </div>

            <div className="localizacao">
                <h2>Nosso estabelecimento</h2>
                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7310.443737993579!2d-46.57215895226598!3d-23.632224099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d4ae0727d17%3A0x37f6e83a3cc436b2!2sAnhanguera!5e0!3m2!1sen!2sbr!4v1740608978768!5m2!1sen!2sbr"
                        width="80%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa Doces JAE"
                    ></iframe>
                </div>
                <h2>Beneficios</h2>
            </div>

            <div className="beneficios">
                <div className="lista">
                    <li>
                        <ul>
                            <h4>Produtos de Alta Qualidade</h4>
                            <li>
                                Ingredientes frescos e selecionados para garantir um sabor único.
                            </li>
                            <li>
                                Doces artesanais com receitas exclusivas, proporcionando uma
                                experiência única.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h4>Variedade de Opções</h4>
                        <ul>
                            <li>
                                Diversidade de produtos, como bolos, brigadeiros e doces veganos.
                            </li>
                            <li>
                                Opções personalizadas para diferentes gostos e ocasiões especiais.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h4>Atendimento Personalizado</h4>
                        <ul>
                            <li>
                                Serviço dedicado ao cliente, com pedidos personalizados para
                                eventos.
                            </li>
                            <li>
                                Sugestões criativas de combinações de doces para uma experiência
                                única.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h4>Entrega Rápida e Segura</h4>
                        <ul>
                            <li>
                                Entrega pontual, com embalagens que preservam a qualidade dos
                                doces.
                            </li>
                            <li>
                                Garantia de que os doces chegam em perfeitas condições ao cliente.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h4>Compromisso com a Sustentabilidade</h4>
                        <ul>
                            <li>
                                Utilização de embalagens ecológicas, contribuindo para a redução
                                do impacto ambiental.
                            </li>
                            <li>
                                Práticas sustentáveis em todo o processo de produção, desde a
                                escolha dos ingredientes até a entrega final.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h4>Preços Competitivos</h4>
                        <ul>
                            <li>
                                Produtos de alta qualidade com preços acessíveis, garantindo o
                                melhor custo-benefício.
                            </li>
                            <li>
                                Promoções e descontos especiais para clientes frequentes e em
                                datas comemorativas.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h4>Ingredientes Exclusivos</h4>
                        <ul>
                            <li>
                                Ingredientes exclusivos e de alta qualidade que fazem toda a
                                diferença no sabor.
                            </li>
                            <li>
                                Receitas personalizadas com ingredientes raros, perfeitos para
                                eventos especiais.
                            </li>
                        </ul>
                    </li>
                </div>
                <div className="imagem">
                    <img
                        src="/img/beneficios.jpg"
                        alt="Benefícios"
                        style={{ borderRadius: "25px" }}
                    />
                </div>
            </div>

            <div className="video">
                <video width="100%" height="700" autoPlay loop muted>
                    <source src="/img/video.mp4" type="video/mp4" />
                </video>
            </div>

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
