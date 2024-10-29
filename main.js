let secretNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
    let userNumber = prompt("Угадай число от 1 до 100:");

    if (userNumber === null) {
        alert("Игра окончена");
    } else if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        alert("Введи число от 1 до 100!");
        guessNumber();
    } else {
        userNumber = parseInt(userNumber);
        if (userNumber < secretNumber) {
            alert("Загаданное число больше");
            guessNumber();
        } else if (userNumber > secretNumber) {
            alert("Загаданное число меньше");
            guessNumber();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }
}

guessNumber();