var sublime = new Audio('sublime.mp3')
var calma = new Audio('calma vai devagar.mp3')
var mine = new Audio('minecraft.mp3')
var ballin = new Audio('ballin.mp3')
var cupid = new Audio('cupid.mp3')
var body = document.getElementById('body')


function tocar1(){
    cupid.play()
    body.innerHTML = `<div id="principal"><img src="cupid.webp" alt="" class="capa" id="sublime"><div class="conteiner" id="cont"><div class="barra" id="barra"></div></div><a href="index.html" class="play" id="home"><img src="casa.png" class="icone"></a></div> <p id="letra"></p>`

    var imagem = document.getElementById('sublime')
    var letra = document.getElementById('letra')
    var principal = document.getElementById('principal')
    var barra = document.getElementById('barra')
    var conteiner = document.getElementById('cont')
    body.style.color = 'white'
    letra.style.fontSize = '20px'
    imagem.style.width = '500px'
    imagem.style.height = '500px'
    principal.style.display = 'flex'
    principal.style.flexDirection = 'column'
    principal.style.backgroundColor = 'rgb(35, 35, 35)'
    barra.style.animationDuration = '145s'
    conteiner.style.marginBottom = '10px'
    
}

function tocar2(){
    mine.play()
    body.innerHTML = '<div id="principal"><img src="minecraft.webp" alt="" class="capa" id="sublime"><div class="conteiner" id="cont"><div class="barra" id="barra"></div></div><a href="index.html" class="play" id="home"><img src="casa.png" class="icone"></a></div> <p id="letra"></p>'

    var imagem = document.getElementById('sublime')
    var letra = document.getElementById('letra')
    var principal = document.getElementById('principal')
    var barra = document.getElementById('barra')
    var conteiner = document.getElementById('cont')
    body.style.color = 'white'
    letra.style.fontSize = '18px'
    imagem.style.width = '500px'
    imagem.style.height = '500px'
    principal.style.display = 'flex'
    principal.style.flexDirection = 'column'
    principal.style.backgroundColor = 'rgb(35, 35, 35)'
    barra.style.animationDuration = '189s'
    conteiner.style.marginBottom = '10px'
    
}

function tocar3(){
    sublime.play()
    body.innerHTML = '<div id="principal"><img src="sublime.webp" alt="" class="capa" id="sublime"><div class="conteiner"><div class="barra" id="barra"></div></div><a href="index.html" class="play" id="home"><img src="casa.png" class="icone"></a></div> <p id="letra"></p>'

    var imagem = document.getElementById('sublime')
    var letra = document.getElementById('letra')
    var principal = document.getElementById('principal')
    var barra = document.getElementById('barra')
    var conteiner = document.getElementById('cont')
    body.style.color = 'white'
    letra.style.fontSize = '20px'
    imagem.style.width = '500px'
    imagem.style.height = '500px'
    principal.style.display = 'flex'
    principal.style.flexDirection = 'column'
    principal.style.backgroundColor = 'rgb(35, 35, 35)'
    barra.style.animationDuration = '220s'
    conteiner.style.marginBottom = '10px'
}

function tocar4(){
    calma.play()
    body.innerHTML = '<div id="principal"><img src="gilberto.png" alt="" class="capa" id="gilberto"><div class="conteiner"><div class="barra" id="barra"></div></div> <a href="index.html" class="play" id="home"><img src="casa.png" class="icone"></a></div> <p id="letra"></p>'

    var imagem = document.getElementById('gilberto')
    var letra = document.getElementById('letra')
    var principal = document.getElementById('principal')
    var barra = document.getElementById('barra')
    var conteiner = document.getElementById('cont')
    body.style.color = 'white'
    letra.style.fontSize = '20px'
    imagem.style.width = '500px'
    imagem.style.height = '500px'
    principal.style.display = 'flex'
    principal.style.flexDirection = 'column'
    principal.style.backgroundColor = 'rgb(35, 35, 35)'
    barra.style.animationDuration = '118s'
    conteiner.style.marginBottom = '10px'
}

function tocar5(){
    ballin.play()
    body.innerHTML = `<div id="principal"><img src="ballin.png" alt="" class="capa" id="sublime"><div class="conteiner" id="cont"><div class="barra" id="barra"></div></div><a href="index.html" class="play" id="home"><img src="casa.png" class="icone"></a></div> <p id="letra"></p>`

    var imagem = document.getElementById('sublime')
    var letra = document.getElementById('letra')
    var principal = document.getElementById('principal')
    var barra = document.getElementById('barra')
    var conteiner = document.getElementById('cont')
    body.style.color = 'white'
    letra.style.fontSize = '20px'
    imagem.style.width = '500px'
    imagem.style.height = '500px'
    principal.style.display = 'flex'
    principal.style.flexDirection = 'column'
    principal.style.backgroundColor = 'rgb(35, 35, 35)'
    barra.style.animationDuration = '104s'
    conteiner.style.marginBottom = '10px'
    
}