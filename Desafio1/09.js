let ano = parseInt(prompt("Digite seu ano de nascimento: "));

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

alert(anoAtual - ano);
