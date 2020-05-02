const game = document.getElementById("game");
const welcomePage = document.getElementById("welcome-page");
const startGameTimerOutput = document.getElementById("start-game-timer-output");
const reloadTimerOutput = document.getElementById("reload-timer-output");
const gameOverPage = document.getElementById("game-over");

const normalAttackButton = document.getElementById("normal-attack-button");
const normalAttackButtonTwo = document.getElementById("normal-attack-button-two");
const normalAttackButtonThree = document.getElementById("normal-attack-button-three");
const normalAttackButtonFour = document.getElementById("normal-attack-button-four");
const normalAttackButtonFive = document.getElementById("normal-attack-button-five");

const playerHealthOutput = document.getElementById("player-health-output");
const playerPage = document.getElementById("player");

const opponentOne = document.getElementById("opponent");
const opponentTwo = document.getElementById("opponent-two");
const opponentThree = document.getElementById("opponent-three");
const opponentFour = document.getElementById("opponent-four");
const opponentFive = document.getElementById("opponent-five");

const opponentOneHealthOutput = document.getElementById('opponent-one-health-output');
const opponentTwoHealthOutput = document.getElementById("opponent-two-health-output");
const opponentThreeHealthOutput = document.getElementById("opponent-three-health-output");
const opponentFourHealthOutput = document.getElementById("opponent-four-health-output");
const opponentFiveHealthOutput = document.getElementById("opponent-five-health-output");

const gameMessage = document.getElementById("game-message");

//Character Attributes----------------------------------
let player = {
  health: 1000,
  normalAttack: 8,
  specialAttack: 13
};

let opponentOneAttributes = {
  health: 100,
  normalAttack: 7
};

let opponentTwoAttributes = {
  health: 125,
  normalAttack: 8
};

let opponentThreeAttributes = {
  health: 150,
  normalAttack: 9
}

let opponentFourAttributes = {
  health: 350,
  normalAttack: 15
};

let opponentFiveAttributes = {
  health: 200,
  normalAttack: 10
}

//Game Settings-------------------------
const displayGame = () => {
  let secs = 4;
  let startGameTimer = setInterval(() => {
    secs--;
    startGameTimerOutput.innerHTML = `Starting in... ${secs}`;

    if(secs < 1) {
      clearInterval(startGameTimer);
      welcomePage.style.display = 'none';
      game.style.display = 'block';
    }
  }, 1000);

  startGameTimerOutput.style.visibility = 'visible';
  displayAttributes();
}

const displayAttributes = () => {
  playerHealthOutput.innerText = player.health;

  opponentOneHealthOutput.innerText = opponentOneAttributes.health;
  opponentTwoHealthOutput.innerText = opponentTwoAttributes.health;
  opponentThreeHealthOutput.innerText = opponentThreeAttributes.health;
  opponentFourHealthOutput.innerText = opponentFourAttributes.health;
  opponentFiveHealthOutput.innerText = opponentFiveAttributes.health;
}

const gameOver = () => {
  playerPage.style.display = 'none';

  game.style.display = 'none';

  opponentOne.style.display = 'none';
  opponentTwo.style.display = 'none';
  opponentThree.style.display = 'none';
  opponentFour.style.display = 'none';
  opponentFive.style.display = 'none';

  gameOverPage.style.display = 'block';

  let secs = 6;
  let reloadTimer = setInterval(() => {
    secs--;
    reloadTimerOutput.innerHTML = `Restarting game in... ${secs}`;

    if(secs < 1) {
      clearInterval(reloadTimer);
      location.reload();
    }
  }, 1000);
}

//Opponent Game Settings -------------------------------

const updateTwoOpponent = () => {
  setTimeout(() => {
    opponentOne.style.display = 'none';
    opponentTwo.style.display = 'block';

    gameMessage.innerText = '';

    normalAttackButton.style.display = 'none';
    normalAttackButtonTwo.style.display = 'inline';
  }, 1500)
}

const updateThreeOpponent = () => {
  setTimeout(() => {
    opponentTwo.style.display = 'none';
    opponentThree.style.display = 'block';

    gameMessage.innerText = '';

    normalAttackButtonTwo.style.display = 'none';
    normalAttackButtonThree.style.display = 'inline';
  }, 1500)
}

const updateFourOpponent = () => {
  setTimeout(() => {
    opponentThree.style.display = 'none';
    opponentFour.style.display = 'block';

    gameMessage.innerText = '';

    normalAttackButtonThree.style.display = 'none';
    normalAttackButtonFour.style.display = 'inline';
  }, 1500)
}

const updateFiveOpponent = () => {
  setTimeout(() => {
    opponentFour.style.display = 'none';
    opponentFive.style.display = 'block';

    gameMessage.innerText = '';

    normalAttackButtonFour.style.display = 'none';
    normalAttackButtonFive.style.display = 'inline';
  }, 1500)
}

//Attacks Button Section ---------------------------------
const attackOneOpponent = () => {
  let playerDmg = Math.floor((Math.random() * 5) * 2 * player.normalAttack);

  opponentOneAttributes.health = opponentOneAttributes.health - playerDmg;

  opponentOneHealthOutput.innerHTML = `${opponentOneAttributes.health}`;

  normalAttackButton.disabled = true;
  gameMessage.innerText = "Squirtle's turn to attack!"

  if(opponentOneAttributes.health <= 0) {
    opponentOneHealthOutput.innerHTML = 0;
    gameMessage.innerText = "You've WON, You beat Squirtle!";
    normalAttackButton.disabled = true;
    updateTwoOpponent();
    return;
  }

  setTimeout(() => {
    let opponentOneDmg = Math.floor((Math.random() * 5) * 2 * opponentOneAttributes.normalAttack);

    player.health = player.health - opponentOneDmg;
    playerHealthOutput.innerHTML = `${player.health}`;

    normalAttackButton.disabled = false;
    gameMessage.innerText = "Your turn to attack!";

    if(player.health <= 0) {
      playerHealthOutput.innerHTML = 0;
      normalAttackButton.disabled = true;
      gameOver();
      return;
    }
  }, 1000)
  return;
}

const attackTwoOpponent = () => {
  let playerDmg = Math.floor((Math.random() * 5) * 2 * player.normalAttack);

  opponentTwoAttributes.health = opponentTwoAttributes.health - playerDmg

  opponentTwoHealthOutput.innerHTML = `${opponentTwoAttributes.health}`;

  normalAttackButtonTwo.disabled = true;
  gameMessage.innerText = "Psyduck's turn to attack!"

  if(opponentTwoAttributes.health <= 0) {
    opponentTwoHealthOutput.innerHTML = 0;
    gameMessage.innerText = "You've WON, You beat Psyduck!";
    normalAttackButtonTwo.disabled = true;
    updateThreeOpponent();
    return;
  }

  setTimeout(() => {
    let opponentTwoDmg = Math.floor((Math.random() * 5) * 2 * opponentTwoAttributes.normalAttack);

    player.health = player.health - opponentTwoDmg;
    playerHealthOutput.innerHTML = `${player.health}`;

    normalAttackButtonTwo.disabled = false;
    gameMessage.innerText = "Your turn to attack!";

    if(player.health <= 0) {
      playerHealthOutput.innerHTML = 0;
      normalAttackButtonTwo.disabled = true;
      gameOver();
      return;
    }
  }, 1000)
  return;
}

const attackThreeOpponent = () => {
  let playerDmg = Math.floor((Math.random() * 5) * 2 * player.normalAttack);

  opponentThreeAttributes.health = opponentThreeAttributes.health - playerDmg

  opponentThreeHealthOutput.innerHTML = `${opponentThreeAttributes.health}`;

  normalAttackButtonThree.disabled = true;
  gameMessage.innerText = "Jigglypuff's turn to attack!"

  if(opponentThreeAttributes.health <= 0) {
    opponentThreeHealthOutput.innerHTML = 0;
    gameMessage.innerText = "You've WON, You beat Jigglypuff!";
    normalAttackButtonThree.disabled = true;
    updateFourOpponent();
    return;
  }

  setTimeout(() => {
    let opponentThreeDmg = Math.floor((Math.random() * 5) * 2 * opponentThreeAttributes.normalAttack);

    player.health = player.health - opponentThreeDmg;
    playerHealthOutput.innerHTML = `${player.health}`;

    normalAttackButtonThree.disabled = false;
    gameMessage.innerText = "Your turn to attack!";

    if(player.health <= 0) {
      playerHealthOutput.innerHTML = 0;
      normalAttackButtonThree.disabled = true;
      gameOver();
      return;
    }
  }, 1000)
  return;
}

const attackFourOpponent = () => {
  let playerDmg = Math.floor((Math.random() * 5) * 2 * player.normalAttack);

  opponentFourAttributes.health = opponentFourAttributes.health - playerDmg

  opponentFourHealthOutput.innerHTML = `${opponentFourAttributes.health}`;

  normalAttackButtonFour.disabled = true;
  gameMessage.innerText = "Trainer 'Jim's' turn to attack!"

  if(opponentFourAttributes.health <= 0) {
    opponentFourHealthOutput.innerHTML = 0;
    gameMessage.innerText = "You've WON, You beat Trainer 'Jim'!";
    normalAttackButtonFour.disabled = true;
    updateFiveOpponent();
    return;
  }

  setTimeout(() => {
    let opponentFourDmg = Math.floor((Math.random() * 5) * 2 * opponentFourAttributes.normalAttack);

    player.health = player.health - opponentFourDmg;
    playerHealthOutput.innerHTML = `${player.health}`;

    normalAttackButtonFour.disabled = false;
    gameMessage.innerText = "Your turn to attack!";

    if(player.health <= 0) {
      playerHealthOutput.innerHTML = 0;
      normalAttackButtonFour.disabled = true;
      gameOver();
      return;
    }
  }, 1000)
  return;
}

const attackFiveOpponent = () => {
  let playerDmg = Math.floor((Math.random() * 5) * 2 * player.normalAttack);

  opponentFiveAttributes.health = opponentFiveAttributes.health - playerDmg

  opponentFiveHealthOutput.innerHTML = `${opponentFiveAttributes.health}`;

  normalAttackButtonFive.disabled = true;
  gameMessage.innerText = "Egg's turn to attack!"

  if(opponentFiveAttributes.health <= 0) {
    opponentFiveHealthOutput.innerHTML = 0;
    gameMessage.innerText = "You've WON, You beat the egg!";
    normalAttackButtonFive.disabled = true;
    updateSixOpponent();
    return;
  }

  setTimeout(() => {
    let opponentFiveDmg = Math.floor((Math.random() * 5) * 2 * opponentFiveAttributes.normalAttack);

    player.health = player.health - opponentFiveDmg;
    playerHealthOutput.innerHTML = `${player.health}`;

    normalAttackButtonFive.disabled = false;
    gameMessage.innerText = "Your turn to attack!";

    if(player.health <= 0) {
      playerHealthOutput.innerHTML = 0;
      normalAttackButtonFive.disabled = true;
      gameOver();
      return;
    }
  }, 1000)
  return;
}
