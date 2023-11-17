const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector('h1')
const restart = document.querySelector('.restart')

const ash = document.querySelector("#ash")

const charmader = document.querySelector("#charmader")
const pikachu = document.querySelector("#pikachu")
const zubat = document.querySelector("#zubat")

const audio = document.querySelector("audio");
audio.volume = 0.2;

const musicControl = document.querySelector('.music-control');

musicControl.addEventListener('click', (event) => {
    event.stopPropagation()
    event.target.src = `${event.target.src.includes('on.png') ? './assets/icons/off.png' : './assets/icons/on.png'}`;
    audio.paused ? audio.play() : audio.pause();
});

// Define a posição inicial
ash.style.right = '0px';
ash.style.top = '0px';

function getRightPosition(element){
    return parseInt(element.style.right.split("px")) || 0;
}

function getTopPosition(element){
    return parseInt(element.style.top.split("px")) || 0;
}

let timeLeft = 30;
let pokemonsFound = 0;

// Inicie o contador
const timer = setInterval(() => {
    timeLeft--;
    count.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('Game Over');
    }
}, 1000);

function verifyLookPokemon(){
    // Defina as áreas para cada Pokémon
    const charmaderArea = { top: 2, bottom: 98, left: 130, right: 216 };
    const pikachuArea = { top: 100, bottom: 200, left: 220, right: 300 };
    const zubatArea = { top: 200, bottom: 300, left: 310, right: 400 };

    // Verifique se o personagem está dentro da área de cada Pokémon
    if (charmader.style.display !== 'block' && getTopPosition(ash) >= charmaderArea.top && getTopPosition(ash) <= charmaderArea.bottom && getRightPosition(ash) >= charmaderArea.left && getRightPosition(ash) <= charmaderArea.right) {
        charmader.style.display = 'block';
        charmader.style.right = `${getRightPosition(ash)}px`; // Fica na mesma posição do personagem
        charmader.style.top = `${getTopPosition(ash)}px`;
        pokemonsFound++;
    }

    if (pikachu.style.display !== 'block' && getTopPosition(ash) >= pikachuArea.top && getTopPosition(ash) <= pikachuArea.bottom && getRightPosition(ash) >= pikachuArea.left && getRightPosition(ash) <= pikachuArea.right) {
        pikachu.style.display = 'block';
        pikachu.style.right = `${getRightPosition(ash)}px`; // Fica na mesma posição do personagem
        pikachu.style.top = `${getTopPosition(ash)}px`;
        pokemonsFound++;
    }

    if (zubat.style.display !== 'block' && getTopPosition(ash) >= zubatArea.top && getTopPosition(ash) <= zubatArea.bottom && getRightPosition(ash) >= zubatArea.left && getRightPosition(ash) <= zubatArea.right) {
        zubat.style.display = 'block';
        zubat.style.right = `${getRightPosition(ash)}px`; // Fica na mesma posição do personagem
        zubat.style.top = `${getTopPosition(ash)}px`;
        pokemonsFound++;
    }

    // Verifique se todos os Pokémons foram encontrados
    if (pokemonsFound === 3) {
        clearInterval(timer);
        alert('Você ganhou!');
    }
}

body.addEventListener('keydown', (event) => {
    event.stopImmediatePropagation();

    switch (event.code) {
        case "ArrowLeft":
            if (getRightPosition(ash) < 770) {
                ash.style.right = `${getRightPosition(ash) + 8}px`;
                ash.src = './assets/left.png';
            }
            break;
        case 'ArrowRight':
            if (getRightPosition(ash) > 0) {
                ash.style.right = `${getRightPosition(ash) - 8}px`;
                ash.src = './assets/right.png';
            }
            break;
        case 'ArrowDown':
            if (getTopPosition(ash) < 625) {
                ash.style.top = `${getTopPosition(ash) + 8}px`;
                ash.src = './assets/front.png';
            }
            break;
        case 'ArrowUp':
            if (getTopPosition(ash) > 0) {
                ash.style.top = `${getTopPosition(ash) - 8}px`;
                ash.src = './assets/back.png';
            }
            break;
    }

    verifyLookPokemon();
});

function jogar() {
    document.getElementById('menu').style.display = 'none';
}

function creditos() {
    alert('Jogo feito por João Paulo');
}
