function verificarNumeroPositivo() {
    let num = prompt("Digite um número:");
    
    // Verifica se o valor inserido é um número válido
    if (isNaN(num)) {
      alert("Por favor, insira um número válido.");
      return; // Sai da função se não for um número
    }
    
    // Converte o valor para número e verifica se é positivo
    num = Number(num);
    if (num > 0) {
      alert("O número é positivo!");
    } else {
      alert("Por favor, insira um número positivo maior que zero.");
    }
}
  
// Chama a função para execução
verificarNumeroPositivo();
  