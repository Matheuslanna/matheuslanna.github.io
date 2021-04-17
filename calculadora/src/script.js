//Entrada do primeiro valor do cálculo
var primeiroValor = parseFloat(prompt("Digite o primeiro valor:")) 
//Entrada do segundo valor do cálculo
var segundoValor = parseFloat(prompt("Digite o segundo valor:"))
//Entrada da operação a ser utilizada
var operacao = prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão: ")

if (operacao == 1){ //Caso o usuário escolha a soma
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = "+ resultado.toFixed(2) + "</h2>")
} else if (operacao == 2){ //Caso o usuário escolha a subtração
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = "+ resultado.toFixed(2) + "</h2>")
} else if (operacao == 3){ //Caso o usuário escolha a multiplicação
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = "+ resultado.toFixed(2) + "</h2>")
} else if (operacao == 4){ //Caso o usuário escolha a divisão
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = "+ resultado.toFixed(2) + "</h2>")
} else { //Caso o usuário escolha uma opção invalida para a operação
   document.write("<h2>OPÇÃO INVÁLIDA</h2>")
}
