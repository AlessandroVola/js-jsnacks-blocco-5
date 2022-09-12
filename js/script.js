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


/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {
        name: `type1`,
        misura: 10,
        peso: 9
    },
    {
        name: `type2`,
        misura: 11,
        peso: 9

    },
    {
        name: `type3`,
        misura: 12,
        peso: 5
    },
    {
        name: `type4`,
        misura: 13,
        peso: 7
    },
    {
        name: `type5`,
        misura: 14,
        peso: 7
    },
    {
        name: `type6`,
        misura: 15,
        peso: 6
    },
    {
        name: `type7`,
        misura: 17,
        peso: 3

    },
    {
        name: `type8`,
        misura: 18,
        peso: 4

    },
    {
        name: `type9`,
        misura: 19,
        peso: 2
    },
    {
        name: `type10`,
        misura: 20,
        peso: 5
    },
]

const moreThan15cm = []

const lessThan15cm = []

for (i = 0; i < zucchine.length; i++) {
    if (zucchine[i].misura < 15) {
        lessThan15cm.push(zucchine[i])
    } else {
        moreThan15cm.push(zucchine[i])
    }
}

console.log(lessThan15cm);
console.log(moreThan15cm);



