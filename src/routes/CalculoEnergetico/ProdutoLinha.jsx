import { useState } from "react";

const ProdutoLinha = ({ nome, quantidades, tempos, potencias, onChange }) => {
    const [quantidade, setQuantidade] = useState(""); // Estado inicial vazio
    const [tempo, setTempo] = useState(""); // Adicionando estados individuais
    const [potencia, setPotencia] = useState("");

    const isNaoUso = quantidade === "Não Uso";

    const handleQuantidadeChange = (e) => {
        const selectedQuantidade = e.target.value;
        setQuantidade(selectedQuantidade);
        onChange(nome, selectedQuantidade, tempo, potencia);

        // Resetar os campos de tempo e potência ao selecionar "Não Uso"
        if (selectedQuantidade === "Não Uso") {
            setTempo("Não Uso");
            setPotencia("Não Uso");
            onChange(nome, selectedQuantidade, "Não Uso", "Não Uso");
        } else {
            setTempo(""); // Liberar as opções
            setPotencia(""); // Liberar as opções
        }
    };

    const handleTempoChange = (e) => {
        const selectedTempo = e.target.value;
        setTempo(selectedTempo);
        onChange(nome, quantidade, selectedTempo, potencia);
    };

    const handlePotenciaChange = (e) => {
        const selectedPotencia = e.target.value;
        setPotencia(selectedPotencia);
        onChange(nome, quantidade, tempo, selectedPotencia);
    };

    return (
        <tr className="flex items-center justify-between w-full text-white sombra-login text-xl">
            <td className="w-full text-left py-3 font-bold text-2xl text-white">{nome}</td>
            <td className="w-full text-left py-3">
                <select
                    className="text-black"
                    name="quantidade"
                    value={quantidade}
                    onChange={handleQuantidadeChange}
                >
                    <option value="" disabled>Quantidade</option>
                    {quantidades.map((qtd) => (
                        <option key={qtd} value={qtd}>{qtd}</option>
                    ))}
                </select>
            </td>
            <td className="w-full text-left py-3">
                <select
                    className="text-black"
                    name="tempo"
                    disabled={isNaoUso}
                    value={tempo}
                    onChange={handleTempoChange}
                >
                    <option value="" disabled>Tempo</option>
                    {!isNaoUso && tempos.map((tempo) => (
                        <option key={tempo.value} value={tempo.value}>{tempo.label}</option>
                    ))}
                    {isNaoUso && <option value="Não Uso">Não Uso</option>}
                </select>
            </td>
            <td className="w-full text-left py-3">
                <select
                    className="text-black"
                    name="potencia"
                    disabled={isNaoUso}
                    value={potencia}
                    onChange={handlePotenciaChange}
                >
                    <option value="" disabled>Potência Média</option>
                    {!isNaoUso && potencias.map((potencia) => (
                        <option key={potencia.value} value={potencia.value}>{potencia.label}</option>
                    ))}
                    {isNaoUso && <option value="Não Uso">Não Uso</option>}
                </select>
            </td>
        </tr>
    );
};

export default ProdutoLinha;
