var numeroSecreto = Math.floor(Math.random()*11)
var tentativas = 3

while(tentativas > 0){
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  if (chute == numeroSecreto) {
    alert("Acertou!")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor.")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior.")
    tentativas = tentativas - 1
  } 
}

if (chute != numeroSecreto){
  alert("Suas tentativas acabaram, o número secreto era " + numeroSecreto)
}