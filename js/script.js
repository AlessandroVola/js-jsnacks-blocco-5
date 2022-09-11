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
console.log(`JS SNACK 1`);
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

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

for (i = 0; i < footballTeams.length; i++) {
    const randomPoints = getRandomNumber(0, 70);
    console.log(randomPoints);
    footballTeams[i].points = randomPoints
}

for (i = 0; i < footballTeams.length; i++) {
    const randomTimesFouled = getRandomNumber(0, 30);
    console.log(randomTimesFouled);
    footballTeams[i].timesFouled = randomTimesFouled;
}

console.log(footballTeams);



function getRandomNumber(min, max) {
    const range = max - min + 1;
    const random = Math.floor(Math.random() * range) + min;
    return random
}


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

console.log(`JS SNACK 2`)
function threeVariables(array, a, b) {
    const array = [];
    number = 0
}

/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */