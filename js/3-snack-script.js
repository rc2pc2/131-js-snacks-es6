// ES6 Snack 5
// A partire da un array di stringhe, crea un secondo array formattando
//  le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const strings = [
    "topolina", "topoLINo", "EstrEmaCasSEWord",'pippo', 'PLUTO', 'Paperino'
];

// const formattedStrings = strings.map((word) => {
//     //  # prendo il primo carattere della parola e lo trasformo in uppercase
//     const firstChar = word.charAt(0).toUpperCase();

//     //  # prendo la sottostringa dal secondo carattere in poi (1) e lo trasformo tutto in lowercase
//     const restOfWord = word.substring(1).toLowerCase();
//     console.log(firstChar, restOfWord);

//     return firstChar + restOfWord;
// });

const formattedStrings = strings.map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());

console.log(strings);
console.log(formattedStrings);