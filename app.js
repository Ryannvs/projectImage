"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem (){
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--bg-imagem', `url(./img/${imagem}.webp)`)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)