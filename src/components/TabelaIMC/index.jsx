import styles from "./TabelaIMC.module.css";

export default () => {
    return (
        <>
            <h2>Tabela de IMC</h2>
            <p className={styles.p}>A tabela a seguir indica a classificação dos valores de IMC, de acordo com a Organização Mundial da Saúde:</p>
            <table>
                <thead>
                    <tr>
                        <th>IMC (kg/m²)</th>
                        <th>Diagnóstico</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 16</td>
                        <td>Magreza grave</td>
                    </tr>
                    <tr>
                        <td>Entre 16 e 16,9</td>
                        <td>Muito abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 17 e 18,5</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>Entre 25 e 29,9</td>
                        <td>Acima do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 30 e 34,9</td>
                        <td>Obesidade classe I</td>
                    </tr>
                    <tr>
                        <td>Entre 35 e 39,9</td>
                        <td>Obesidade classe II</td>
                    </tr>
                    <tr>
                        <td>Maior que 40</td>
                        <td>Obesidade classe III ou mórbida</td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}