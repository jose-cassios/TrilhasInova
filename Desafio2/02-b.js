function banco(CapitalAplicado, TempoDeAplicacao){
    let TaxaDeJuros = 0;

    if (CapitalAplicado >= 999.99 && CapitalAplicado <= 10000 && TempoDeAplicacao > 5 && TempoDeAplicacao < 12){
        TaxaDeJuros = 0.02;
    }

    let ValorRendimento = CapitalAplicado * TempoDeAplicacao * TaxaDeJuros;
    alert(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} mes(es), rendeu ${formatador.format(ValorRendimento)} a juros de ${TaxaDeJuros}.`);
}

const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

while(true){
    var CapitalAplicado = parseInt(prompt("Digite o valor em dinheiro aplicado"));

    if (!isNaN(CapitalAplicado) && CapitalAplicado > 0){
        break;
    }
    alert("Valor informado inválido! Por favor, informe o valor depositado na poupança");
}

let TempoDeAplicacao = parseInt(prompt("Digite a quantidade de meses em aplicação"));

banco(CapitalAplicado, TempoDeAplicacao);