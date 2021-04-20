//Pergunta ao usuário qual o valor ele deseja converter de dólar para real, convertendo o texto para formato numérico
var valorEmDolar = parseFloat(prompt("Qual o valor em dólar você deseja converter?"))

//Converte o valor de dólar para real
var valorEmReal = valorEmDolar * 5.5 

//var valorEmRealDecimal = valorEmReal.toFixed(2)

//Exibe para o usuário o resultado da conversão
alert("O valor convertido para real será de: " + valorEmReal.toFixed(2) + " reais")