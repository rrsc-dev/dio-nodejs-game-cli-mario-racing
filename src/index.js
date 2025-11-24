const charMario = {
    NOME: 'Mario',
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
}

const charBowser = {
    NOME: 'Bowser',
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
}

const charPeach = {
    NOME: 'Peach',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0
}

const charLuigi = {
    NOME: 'Luigi',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

const charYoshi = {
    NOME: 'Yoshi',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0
}

const charDonkeyKong = {
    NOME: 'Donkey Kong',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
}

let player1, player2;

async function drawBlock() {
    block = Math.floor(Math.random() * 3) + 1;

    switch (block) {
        case 1: // Reta
            break;
        case 2: // Curva
            break;
        default: // Duelo

    }
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//Sortear quem serão os competidores
async function drawPlayers() {
    player1 = Math.floor(Math.random() * 6) + 1;
    player2 = Math.floor(Math.random() * 6) + 1;

    if($player1 == $player2) {
        player2 = Math.floor(Math.random() * 6) + 1;
    }
}

async function playRaceEngine(player1, player2) {
    
}

(async function main() {
    console.log(`Corrida entre x e y começando...`);

    await playRaceEngine(player1, player2);
})()