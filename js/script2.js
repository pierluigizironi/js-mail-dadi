// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampare in console i tiri di dado e il risultato.

// Metto due const dove riesco a generare due numeri randomici da 1 e 6
// Inizio a decretare il vincitore in usando le if clauses
//Stampo con console.log

// Metto due const dove riesco a generare due numeri randomici da 1 e 6
const userNumber = Math.floor( Math.random() * 6 ) +1;
console.log('Numeri giocatore:', userNumber)
const pcNumber = Math.floor( Math.random() * 6 ) +1;
console.log('Numeri computer:', pcNumber)

// Inizio a decretare il vincitore in usando le if clauses
//Stampo con console.log

if (userNumber > pcNumber) {
    console.log('Congratulazioni! Hai vinto')
} else if (userNumber == pcNumber) {
    console.log('Pareggio! Ritenta!')
} else {
    console.log('Hai perso!')
}