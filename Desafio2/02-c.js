function banco(CapitalAplicado, TempoDeAplicacao){
    let TaxaDeJuros = 0;

    if (CapitalAplicado > 50000 && CapitalAplicado <= 100000 && TempoDeAplicacao > 12 && TempoDeAplicacao <= 24){
        TaxaDeJuros = 0.10;
    }

    let ValorRendimento = CapitalAplicado * TempoDeAplicacao * TaxaDeJuros;
    alert(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} mes(es), rendeu R$${formatador.format(ValorRendimento)} a juros de ${TaxaDeJuros}.`);
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