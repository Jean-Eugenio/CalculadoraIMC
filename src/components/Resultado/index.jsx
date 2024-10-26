export default ({peso=1, altura=1}) => {
    function resultado () {
        if ((peso / (altura * altura)) < 16.0) {
            return "Magreza grave";
        } else if ((peso / (altura * altura)) < 16.9) {
            return "Muito abaixo do peso";
        } else if ((peso / (altura * altura)) < 18.5) {
            return "Abaixo do peso";
        } else if ((peso / (altura * altura)) < 24.9) {
            return "Peso normal";
        } else if ((peso / (altura * altura)) < 29.9) {
            return "Acima do peso";
        } else if ((peso / (altura * altura)) < 34.9) {
            return "Obesidade classe I";
        } else if ((peso / (altura * altura)) < 39.9) {
            return "Obesidade classe II";
        } else if ((peso / (altura * altura)) > 40) {
            return "Obesidade classe III";
        }
    } 
    return (
        <>
            <h2>Resultado:</h2>
            <p>Pesando <b>{peso}</b>kg e com <b>{altura}</b>m de altura. Você está com {resultado()}.</p>
        </>
    )
}


