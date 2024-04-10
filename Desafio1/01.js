let nome = prompt("Digite seu nome: ");

if (nome === null || nome.trim() === ""){
    alert("Desculpe, nenhum nome fornecido!");
}
else {
    alert(`Olá, ${nome}, seja bem-vindo(a) à nossa empresa`);
}