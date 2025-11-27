import { useSearchParams } from "react-router-dom";

export default function PopProdutos() {
    const [searchParams] = useSearchParams();

    const nome = searchParams.get("nome") || "TÍTULO";
    const imagem = searchParams.get("imagem") || "";
    const descricao = searchParams.get("descricao") || "DESCRIÇÃO";

    return (
        <main>
            <div className="produto-container">
                <h1 className="produto-titulo">{nome}</h1>
                <img
                    className="produto-imagem"
                    src={imagem}
                    alt={nome || "Imagem do produto"}
                />
                <p className="produto-descricao">{descricao}</p>
            </div>
        </main>
    );
}
