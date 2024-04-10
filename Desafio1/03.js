let n1 = parseFloat(prompt("Insira a nota 1: "));
let n2 = parseFloat(prompt("Insira a nota 2: "));
let n3 = parseFloat(prompt("Insira a nota 3: "));

let media = (n1 + n2 + n3) / 3;

if (media >= 7 && media <= 10){
    alert("Aprovado");
}
else if (media >= 0){
    alert("Reprovado");
}
else {
    alert("Inválido");
}