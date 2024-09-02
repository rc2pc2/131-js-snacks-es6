
// # *SNACK 3*
// # Creare un array di oggetti:
// # Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// # Stampare in console la bici con peso minore utilizzando destructuring e template literal


// % Creiamo un array di oggetti e lo denominiamo bikes
const bikes = [
    {
        name: "Orbena Super Toro",
        weight: 7000
    },
    {
        name: "Atalina Super Tre",
        weight: 9000
    },
    {
        name: "Atalina Super Micio",
        weight: 8000
    },
    {
        name: "Grand Canion Corridrice",
        weight: 6900
    },
    {
        name: "BMT Sotto Vento",
        weight: 7800
    },
    {
        name: "BMT Sopra Vento",
        weight: 11800
    },
    {
        name: "BMT Soprissima Vento",
        weight: 10800
    },
    {
        name: "BMT Superleggera",
        weight: 5500
    },
    {
        name: "BMT Superleggera",
        weight: 5500
    },
    {
        name: "BMT Superleggera",
        weight: 4300
    },
    {
        name: "BMT Superleggera",
        weight: 5500
    }
];

// # preparo una variabile a cui assegno la prima bici per poter inserire dall'interno del ciclo la mia bici piu' leggera
let lightestBike = bikes[0];

// % Scorriamo gli elementi dell'array dal secondo elemento
// for (let index = 0; index < bikes.length; index++) {
//     const element = bikes[index];
// }
// bikes.forEach(( element ) => {
//     // % se l'elemento attuale pesa meno di quello salvato nella variabile
//     if (element.weight < lightestBike.weight){
//         // % se si => lo sovrascrivo
//         lightestBike = element;
//     }
// });

bikes.forEach(( element ) => {
    const { weight } = element; 
    const { weight : lightestWeight } = lightestBike; 
    console.log(weight, lightestWeight);
    if ( weight < lightestWeight){
        console.warn(`Scambio ${lightestWeight} con il nuovo peso piu' leggero, che e': ${weight}` );
        lightestBike = element;
    }
});

// ! USO SCONSIGLIATO
// const lightestBike = bikes.reduce((lightest, element) => (element.weight < lightest.weight) ? element : lightest, bikes[0]); 

const { name, weight} = lightestBike;
console.log(`La bicicletta piu' leggera e': 
    ${name}, 
    che pesa ${weight}`);

// # per poter avere una bici selezionata

