let player = {////Will add all the other stats
    health: 100,
    power: 20
};
let opponent = {
    health: 100,
    power: 20
};
const attack = () => {
    let attackButton = document.getElementById('attack-button');///needs to be linked to Adam's atk btn
    let gameMessage = document.getElementById('game-message');///for win/lose  /opponent about to attack messages

    let playerAttack = determineAttack(player.power);//trade in atk stat and add in move.basedmg as param MORE PARAMS TO BE ADDED
    opponent.health -= playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)) {
        endGame("Player wins.")///Change to whatever fail screen state they want
        return;
    };

    attackButton.disabled = true; /// so you can't attack until opponent attack has gone through
    gameMessage.innerText = "Opponent is about to wreck your shit."

    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.power);///same as playerAttack
        player.health -= opponentAttack;
        printToScreen();

        if (isGameOver(player.health)) {
            endGame("Opponent wins.");
            return;
        }
        attackButton.disabled = false;
    }, 30);//////// ASK ADAM HOW LONG ANIMATIONS WILL LAST FOR CHARACTERS WILL LAST 
};

const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button').hidden = true;
    document.getElementById('restart-button').hidden = false;
};

const restart = () => {
    let attackButton = document.getElementById('attack-button');
    player.health = 100;
    opponent.health = 100;
    document.getElementById('game-message').innerText = '';
    attackButton.disabled = false;
    attackButton.hidden = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
};

const determineAttack = (power) => {////////MODIFY TO BE WHAT I INTENDED IT TO BE. SHOW TO RYAN FIRST.
    return Math.floor(Math.random() * power);
};

const isGameOver = (health) => {///pretty straightforward
    return health <= 0;
};

const printToScreen = () => {///// modify to set where Adam wants them
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = player.health;
}
printToScreen();