let sum = 0, contador = 1;

let salario = 0;
let listaSalarios = [];

while (salario >= 0){
    salario = parseFloat(prompt(`Digite o salário da pessoa ${contador} (Número negativo para encerrar): `));
    salario = salario >= 0 ? listaSalarios.push(salario) : -1;
    contador++;
}

listaSalarios.forEach(element => {
    sum += element;
});

alert(`O salário total da folha de pagamento é ${sum}.`);
