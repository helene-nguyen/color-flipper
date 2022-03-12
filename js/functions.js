//Yumicode Color Flipper 2022
/* var testLink2 = "Hello, it works in functions, if I write something here, app can get me !"; */

//^FUNCTIONS
//~Create random number between 0 and 9 
function randomNumber() {
    const numbers = "0123456789"
    var createRandomNumber = Math.floor((Math.random() * numbers.length));
    return numbers[createRandomNumber];
}

//~Create random letter between A and F
function randomLetter() {
    const alphabet = "ABCDEF";
    var createRandomLetter = Math.floor(Math.random() * alphabet.length);
    return alphabet[createRandomLetter];
}

//~Create random array
function randomArray() {
    let array = [];
    //Push random numbers and random letters
    array.push(randomNumber()); //choose a random number first and push
    array.push(randomLetter()); //choose a random letter and push
    //Make random numbers and letters
    let randomAll = Math.floor(Math.random() * array.length);
    //To get the random value
    return array[randomAll];
}

//~Create random HEX
function randomHex() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += randomArray();
    }
    return hex;
}

//~Select the background and change the color
function changeBackground() {
    var selectDivBackground = document.querySelector(".background-change");
    selectDivBackground.style.backgroundColor = randomHex();
}

//~Select where we want to change the background
function btnChangeClick() {
    var selectButton = document.querySelector("#btn-change");
    selectButton.addEventListener("click", changeBackground);
    selectButton.addEventListener("click", addInfoHex);
    return selectButton;
}

//~Add the info about the HEX color
function addInfoHex() {
    let addHexTxt = document.querySelector(".hex-txt");
    addHexTxt.innerHTML = randomHex();
}