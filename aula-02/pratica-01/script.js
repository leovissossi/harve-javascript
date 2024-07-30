function calcular(event) {
    event.preventDefault();

    //buscando valor do input de nota
    const nota = document.getElementById("nota").value;

    //buscando a div que contera a info se o aluno foi aprovado ou nao
    const resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10) {
        resultado.textContent = "nota invalida"
    }

    else  if (nota >= 7) {
        resultado.textContent = "aluno aprovado";
    } else {
        resultado.textContent = "aluno reprovado"
    }
}