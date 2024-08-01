function calcular(){

    const velocidade = Number (document.getElementById("velocidade").value);
    const limite = 50;
    const resultado = document.getElementById("resultado");

    if (velocidade > 50){
        resultado.innerHTML = `
        <p><span id=multado>MULTADO!</span> voce estava a ${velocidade}Km/h e o limite neste trecho é ${limite}Km/h.</p>
        <p>Voce deve pagar uma multa no valor de R$${(velocidade-50)*6} pelo limite excedido.</p]>
        `

    }else{
            resultado.innerHTML = `
            <p><span  id=no-limite>Dentro do Limite da Via.</span> Tenha uma boa Viagem!</p>`
        };

    
}