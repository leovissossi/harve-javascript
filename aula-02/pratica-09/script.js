

function buscarPizza(){

    const validar = ["CALABRESA", "FRANGO", "PORTUGUESA", "MARGUERITA", "LOMBO"]
    let pizza = document.getElementById("pizza").value;
    pizza = pizza.toUpperCase();
    const resultado = document.getElementById("resultado");

    if(validar.includes(pizza)){
        resultado.innerHTML = `<p>Sabor ${pizza} tem no menu</p>`;
    }else{
        resultado.innerHTML = `<p>nao temos o sabor ${pizza} no menu</p>`;
    }
}