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
    let block = Math.floor(Math.random() * 3) + 1;
    let result

    switch (block) {
        case 1: // Reta
            result = "RETA";
            break;
        case 2: // Curva
            result = "CURVA";
            break;
        default: // Duelo
            result = "DUELO";
    }

    return result;
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//Sortear quem serão os competidores
async function drawPlayers() {
    numPlayer1 = Math.floor(Math.random() * 6) + 1;
    numPlayer2 = Math.floor(Math.random() * 6) + 1;

    if(numPlayer1 == numPlayer2) {
        numPlayer2 = Math.floor(Math.random() * 6) + 1;
    }

    switch(numPlayer1) {
        case 1: // charMario
            player1 = charMario;
            break;
        case 2: // charBowser
            player1 = charBowser;
            break;
        case 3: // charPeach
            player1 = charPeach;
            break;
        case 4: // charLuigi
            player1 = charLuigi;
            break;
        case 5: // charYoshi
            player1 = charYoshi;
            break;
        case 6: // charDonkeyKong
            player1 = charDonkeyKong;
            break;
    }

    switch(numPlayer2) {
        case 1: // charMario
            player2 = charMario;
            break;
        case 2: // charBowser
            player2 = charBowser;
            break;
        case 3: // charPeach
            player2 = charPeach;
            break;
        case 4: // charLuigi
            player2 = charLuigi;
            break;
        case 5: // charYoshi
            player2 = charYoshi;
            break;
        case 6: // charDonkeyKong
            player2 = charDonkeyKong;
            break;
    }
}

async function playRaceEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log("Rodada: " + round);


        // sortear bloco
        let block = await drawBlock();
        console.log("Bloco: " + round);
    }
}

(async function main() {
    console.log(`Corrida entre x e y começando...`);

    await drawPlayers();
})()