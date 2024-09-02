// # Creare un array di oggetti di squadre di calcio.
// # Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// # Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// # Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// # Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// % Creiamo un array di oggetti squadre teams
const teams = [
    {
        nome: "Fortitudo San Cesareo",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Leoni Milano",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Vesuvi Pompei",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Anguille Ancona",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Aquile Parma",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Squali Bari",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Trattori Catania",
        puntiFatti: 0,
        falliSubiti : 0
    },
    {
        nome: "Falchi Cagliari",
        puntiFatti: 0,
        falliSubiti : 0
    },
];

// % Creo una funzione per generare numeri randomici
function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(teams);

// % La uso per popolare le proprieta' mancanti
for (let index = 0; index < teams.length; index++) {
    const team = teams[index];
    team.falliSubiti = getRandomInteger(10, 50);
    team.puntiFatti = getRandomInteger(20, 120);
}

console.log(teams);

// % Destrutturiamo e mostriamo in console
const newTeams = teams.map(( element ) => {
    const { nome, falliSubiti } = element;
    return { nome, falliSubiti };
});

console.log(newTeams);


