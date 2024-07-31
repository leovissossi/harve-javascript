function calcular(event) {
    event.preventDefault();

    //buscando valor do input de aluno
    const aluno = document.getElementById("aluno").value;

    //buscando valor do input de nota
    const nota = Number(document.getElementById("nota").value);

    //buscando a div que contera a info se o aluno foi aprovado ou nao
    const resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10 || !aluno || Number.isNaN(nota)) {
        resultado.innerHTML = '<span class="reprovado">Dados invalidos</span>';
    } else  if (nota >= 7) {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota}. <span class="aprovado">Aluno APROVADO</span></p>
        `;
    } else {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota}. <span class="reprovado">Aluno REPROVADO</span></p>
        `;
    }
}