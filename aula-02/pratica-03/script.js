function calcular(event) {
    event.preventDefault();

    //buscando valor do input de aluno
    const aluno = document.getElementById("aluno").value;

    //buscando valor do input de nota
    const nota = Number(document.getElementById("nota").value);

    const faltas = Number(document.getElementById("faltas").value);

    //buscando a div que contera a info se o aluno foi aprovado ou nao
    const resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10 || !aluno || Number.isNaN(nota)) {
        resultado.innerHTML = '<span class="reprovado">Dados invalidos</span>';
    } else if (nota == 10 && faltas == 0) {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota} e não teve nenhuma falta. Parabens ${aluno}, <span class=louvor>APROVADO COM LOUVOR</span>`

    } else if (nota >= 5 && nota < 7 && faltas <= 10) {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota} e teve ${faltas} faltas. ${aluno} em <span class=recuperacao>RECUPERAÇÃO</span>
        `


    } else  if (nota >= 7 && faltas <= 10) {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota} e teve ${faltas} faltas. <span id="aprovado">Aluno APROVADO</span></p>
        `

    } else {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota} e teve ${faltas} faltas. <span id="reprovado">Aluno REPROVADO</span></p>
        `;
    }
}
