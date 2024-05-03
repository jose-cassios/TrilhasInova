function Operacao(num1, num2){
    soma_exponenciacao = num1**2 + num2**2;
    resto = num1 % num2;
    subtracao = num2 - num1;

    alert(`A soma da exponenciação (ao quadrado) é: ${soma_exponenciacao}`);
    alert(`O resto da divisão de ${num1} por ${num2} é: ${resto}`);
    alert(`A subtração de ${num2} por ${num1} é: ${subtracao}`);
}

num1 = parseInt(prompt("Digite o 1° valor: "));
num2 = parseInt(prompt("Digite o 2° valor: "));

Operacao(num1, num2);
