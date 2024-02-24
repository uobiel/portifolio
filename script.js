const botaoSobreMim = document.querySelector('#aboutme-button');
const git = document.querySelector('.git');
const linkedin = document.querySelector('.linkedin');
const insta = document.querySelector('.insta');

// botaoSobreMim.addEventListener('click', function(){
//     window.location.href = 'sobre/index.html'
// })

git.addEventListener('click', function(){
    window.open('https://github.com/uobiel', '_blank')
})

linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/gabriel-antunes-873531208/', '_blank')
})

insta.addEventListener('click', function(){
    window.open('https://www.instagram.com/uobiel/', '_blank')
})


const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const projetos = {
    hamburgueria: 'https://uobiel.github.io/projetoHamburgueria/',
    barbearia: 'https://uobiel.github.io/projetoBarbearia/',
    jogoDaVelha: 'https://uobiel.github.io/jogoDaVelha/',
    petshop: 'https://uobiel.github.io/projetoPetShop/',
    clima: 'https://uobiel.github.io/ProjetoClima/',
    calculadora: 'https://uobiel.github.io/calculadora/'
}

card1.addEventListener('click', function(){
    window.open(projetos.petshop, '_blank');
})

card2.addEventListener('click', function(){
    window.open(projetos.barbearia, '_blank');
})

card3.addEventListener('click', function(){
    window.open(projetos.jogoDaVelha, '_blank');
})

card4.addEventListener('click', function(){
    window.open(projetos.hamburgueria, '_blank');
})

card5.addEventListener('click', function(){
    window.open(projetos.clima, '_blank');
})

card6.addEventListener('click', function(){
    window.open(projetos.calculadora, '_blank');
})