var cartaPaulo = {
    nome: "Charmander",
    imagem: "https://64.media.tumblr.com/33fd499912de3b4fe4ba5ac10491edd0/tumblr_pbtw01WkWJ1twwdivo1_500.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 70
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg",
    atributos: {
        ataque: 60,
        defesa: 80,
        magia: 90
    }
}

var cartaGui = {
    nome: "Squirtle",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2018/07/Pok%C3%A9mon-Go-Squirtle-de-%C3%B3culos-escuros.jpeg",
    atributos: {
        ataque: 70,
        defesa: 70,
        magia: 80
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
    //exibirOpcoes()
  
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
 divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    //opcoes.innerHTML = opcoesTexto
  
  var html = "<div id='opcoes' class='carta-status'>"
      
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto +'</div>'

}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        '<p class="resultado-final">Perdeu</p>'
    } else {
        '<p class="resultado-final">Empatou</p>'
    }
  
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
 divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
      
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto +'</div>'

}