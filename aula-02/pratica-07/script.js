function validarAnoBissexto() {
    var ano = parseInt(document.getElementById("ano").value);
    const resultado = document.getElementById("resultado");

    if (ano % 400 == 0)
        resultado.innerHTML = "é bissexto";
    else
    if(ano % 4 == 0 && ano % 100 != 0)
        resultado.innerHTML = "é bissexto";
    else
    resultado.innerHTML = "não é bissexto";


       
}