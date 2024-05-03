function banco(CapitalAplicado, TempoDeAplicacao){
    console.log(CapitalAplicado)

    let TaxaDeJuros = 0.006022;
    let ValorRendimento = CapitalAplicado * TempoDeAplicacao * TaxaDeJuros;
    alert(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} mes(es), rendeu ${formatador.format(ValorRendimento)} a juros de ${TaxaDeJuros}.`);
}

const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

while(true){
    var CapitalAplicado = parseInt(prompt("Digite o valor em dinheiro aplicado"));
    console.log(CapitalAplicado)
    if (!isNaN(CapitalAplicado) && CapitalAplicado > 0){
        break;
    }
    alert("Valor informado inválido! Por favor, informe o valor depositado na poupança");
}

console.log(CapitalAplicado)

let TempoDeAplicacao = parseInt(prompt("Digite a quantidade de meses em aplicação"));
banco(CapitalAplicado, TempoDeAplicacao);