
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const animali = [
    {
        nome : "leone",
        famiglia : "felidi",
        classe: "mammiferi"
    },
    {
        nome : "cane",
        famiglia : "canidi",
        classe: "mammiferi"
    },
    {
        nome : "gallina",
        famiglia : "fasianidi",
        classe: "uccelli"
    },
    {
        nome : "leone",
        famiglia : "felidi",
        classe: "mammiferi"
    },
    {
        nome : "cane",
        famiglia : "canidi",
        classe: "mammiferi"
    },
    {
        nome : "gallina",
        famiglia : "fasianidi",
        classe: "uccelli"
    },
    {
        nome : "leone",
        famiglia : "felidi",
        classe: "mammiferi"
    },
    {
        nome : "cane",
        famiglia : "canidi",
        classe: "mammiferi"
    },
    {
        nome : "gallina",
        famiglia : "fasianidi",
        classe: "uccelli"
    },
    {
        nome : "leone",
        famiglia : "felidi",
        classe: "mammiferi"
    },
    {
        nome : "cane",
        famiglia : "canidi",
        classe: "mammiferi"
    },
    {
        nome : "gallina",
        famiglia : "fasianidi",
        classe: "uccelli"
    },
];

// const mammiferi = [];
// animali.forEach((animal) => {
//     if (element.classe === "mammiferi"){
//         mammiferi.push(animal);
//     }
// });

const mammiferi = animali.filter((animal) => animal.classe === "mammiferi");

console.log(animali);
console.log(mammiferi);