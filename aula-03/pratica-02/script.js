function formatarData() {
    const data = document.getElementById("data").value;

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ]

    const arrayData = data.split("/");
    console.log(arrayData);

    const dia = arrayData[0];
    const mes = arrayData[1];
    const ano = arrayData[2];

    const dataFormatada = document.getElementById("data-formatada");
    dataFormatada.textContent = `${dia} de ${meses[Number(mes) - 1]} de ${ano}`;
}