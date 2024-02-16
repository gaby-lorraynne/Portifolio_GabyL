// Criando variáveis para receber os IDs
let bntMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Adicionando um evento às variáveis
// para abrir menu
bntMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu');
});

// para fechar menu
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});

// Animações
const myObserver = new IntersectionObserver((entrada) =>{
    entrada.forEach( (entry) => {
        if(entry.isIntersecting === true){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})


const elements = document.querySelectorAll('.hidden');


elements.forEach( (element) => myObserver.observe(element));

