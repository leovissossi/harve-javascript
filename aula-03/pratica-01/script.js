const stringManipular = document.getElementById("string-manipular").textContent;

const tamanhoString = document.getElementById("tamanho-string");
tamanhoString.textContent = stringManipular.length;

const indice = 16;
const posicaoCaracter = document.getElementById("posicao-caracter");

const caracterEspecifico = document.getElementById("caracter-especifico");

posicaoCaracter.textContent = indice;
caracterEspecifico.textContent = stringManipular.charAt(indice);

const resultadoSubstituir = document.getElementById("resultado-substituir");
resultadoSubstituir.textContent = stringManipular.replace("escola", "a melhor escola");

const tudoMinuscula = document.getElementById("resultado-minuscula");
tudoMinuscula.textContent = stringManipular.toLowerCase();

const tudoMaiuscula = document.getElementById("resultado-maiuscula");
tudoMaiuscula.textContent = stringManipular.toUpperCase();

const stringComEspacos = document.getElementById("string-com-espacos").textContent;
const semEspacos = document.getElementById("sem-espacos");
semEspacos.textContent = stringComEspacos.trim();