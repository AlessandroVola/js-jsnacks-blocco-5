console.log(`JS OK!`);
/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const footballTeams = [
    {
        name: `Milan`,
        points: 0,
        timesFouled: 0
    },
    {
        name: `Juventus`,
        points: 0,
        timesFouled: 0
    },
    {
        name: `Lazio`,
        points: 0,
        timesFouled: 0
    },
    {
        name: `Roma`,
        points: 0,
        timesFouled: 0
    },
]



for (i = 0; i < footballTeams.length; i++) {
    const randomPoints = getRandomNumber(0, 70)
    console.log(randomPoints)


}

console.log(footballTeams);


function getRandomNumber(min, max) {
    const range = max - min + 1;
    const random = Math.floor(Math.random() * range) + min;
    return random
}
