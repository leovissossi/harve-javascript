function calcular(event){
    event.preventDefault();

    const alturaCm = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    //const resultado = document.getElementById("resultado");

    if (isNaN(alturaCm) || isNaN(peso) || alturaCm <= 0 || peso <= 0){
        document.getElementById("resultado").textContent = `Por favor, preencha todos os campos corretamente`;
        return;
    }

    const alturaM = alturaCm / 100;

    const imc = peso / (alturaM * alturaM);

    let classificacao;
    if(imc < 16){
        classificacao = `baixo peso muito grave`
    }else if (imc >= 16 && imc <= 16.99) {
        classificacao = 'Baixo peso grave';
    } else if (imc >= 17 && imc <= 18.49) {
        classificacao = 'Baixo peso';
    } else if (imc >= 18.50 && imc <= 24.99) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.99) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.99) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    document.getElementById("resultado").textContent = `voce possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`;

}