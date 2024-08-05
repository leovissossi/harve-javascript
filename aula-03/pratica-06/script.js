function calcularDiferencaDeDias(){

    const dataDeNascimentoInput = document.getElementById("data-de-nascimento").value;
    if(!dataDeNascimentoInput){
    return;
    }

    const dataDeNascimento = new Date(dataDeNascimentoInput);
    const dataHoje = new Date();

    const diffTime = dataHoje - dataDeNascimento;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("resultado").textContent = `voce viveu ${diffDays} dias ate hoje`;

}

