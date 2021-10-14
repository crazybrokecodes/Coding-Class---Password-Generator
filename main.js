var generateBtn = document.querySelector("#generate");
var lowerCaseBox = document.getElementById("#lowerCase");
var upperCaseBox = document.getElementById("#upperCase");
var numericBox = document.getElementById("#numeric");
var specialBox = document.getElementById("#special");


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}



// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);


function allowLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function allowUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function allowNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function allowSpecial() {
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~'[";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}



// // Generator Functions: Cut This Out, having issues with JS script from running.

// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol,
// };

// generateEl.addEventListener('click', () => {
//     const length = +lengthEl.value;
//     const hasLower = lowercaseEl.checked;
//     const hasUpper = uppercaseEl.checked;
//     const hasNumber = numbersEl.checked;
//     const hasSymbol = symbolsEl.checked;

//     ReadableStreamDefaultController.innerText = generatePassword(
//         hasLower,
//         hasUpper,
//         hasNumber,
//         hasSymbol,
//         length
//     );
// });

// //Generate password function
// function generatePassword(lower, upper, number, symbol, length) {
//     // 1. Init pw var
//     // 2. Filter out unchecked types
//     // 3. Loop over length call generator function for each type
//     // 4. Add final pw to the pw var and return

//     let generatedPassword = '';

//     const typesCount = lower + upper + number + symbol;

//     console.log('typesCount: ', typesCount);

//     const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

//     console.log('typesArr: ', typesArr);

//     if (typesCount === 0) {
//         return '';
//     }

//     for (let i = 0; i < length; i += typesCount) {
//         typesArr.forEach(type => {
//             const funcName = Object.keys(type)[0]

//             console.log('funcName: ', funcName);

//             generatePassword += randomFunc[funcName]();
//         });
//     }

//     console.log(generatedPassword.slice(0, length));

//     return finalPassword;
// }

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*(){}[]=<>/,.';
//     return symbols[Math.floor(Math.random() * symbols.length)];

// }