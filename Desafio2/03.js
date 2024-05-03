function gerarNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verificaChute(numeroSecreto){
    let tentativas = 3;

    while (tentativas > 0){
        let chute = parseInt(prompt("Digite um inteiro entre 20 e 30"));

        if (chute == numeroSecreto){
            alert("Parabéns! Você acertou.");
            return;
        }
        else {
            tentativas--;
            tentativas > 0 ? alert(`Tente novamente. Você tem ${tentativas} tentativas restantes.`) : alert(`Suas tentativas esgotaram. O número secreto era ${numeroSecreto}`);
        }
    }
}

numeroSecreto = gerarNumero(20, 30);
console.log(numeroSecreto);
verificaChute(numeroSecreto);
