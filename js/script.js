// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
        
const people = [
    { nome : 'Nino',  cognome: 'Quadretto',  eta: 4 },
    { nome : 'Ninetta',  cognome: 'Quandante',  eta: 19 },
    { nome : 'Ninina',  cognome: 'Quandino',  eta: 3 },
    { nome : 'Ninettina',  cognome: 'Quasimodo',  eta: 10 },
    { nome : 'GianNinina',  cognome: 'Quarobbo',  eta: 80 },
    { nome : 'Giunotti',  cognome: 'Qualinquo',  eta: 25 },
    { nome : 'Gianbruna',  cognome: 'Quoretto',  eta: 36 },
    { nome : 'Gianluigi',  cognome: 'Qatar',  eta: 75 },
    { nome : 'Giorgio',  cognome: 'Quilando',  eta: 66 },
    { nome : 'Giovanna',  cognome: 'Quilando',  eta: 33 },
    { nome : 'Gioletta',  cognome: 'Quilando',  eta: 28 },
    { nome : 'Guiana',  cognome: 'Quilandini',  eta: 17 },
    { nome : 'Lorella',  cognome: 'Quilandozzi',  eta: 18 },
    { nome : 'Lorenza',  cognome: 'Quasimeglio',  eta: 19 },
];

const messages = people.map((persona) => 
    `${persona.nome} ${persona.cognome} ${(persona.eta >= 18) ? "puo' guidare" : "non puo' guidare"} perche' ha ${persona.eta} anni`
);

console.log(people);
console.log(messages);