let salario = parseFloat(prompt("Digite seu salário: "));
let aumento = 0;

if (salario <= 2000){
    aumento = 0.1 * salario;
}
else if(salario > 5000  && salario < 10000){
    aumento = 0.05 * salario;
}
else if(salario > 10000 && salario < 15000){
    aumento = 0.02 * salario;
}
else{
    alert("Não há aumento!");
}

if (aumento > 0){
    alert(`O salario de R$${salario} sofreu um aumento de R$${aumento}\nTotal: R$${salario+aumento}`);
}
