printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');

printMessage('Zagrałem ' + 'papier' + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);

Math.random();