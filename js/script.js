console.log('JS OK')

// # Mail
//Crea un array di email;
//Chiedi all’utente la sua email.
//controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

// Inizio creando una serie di mail
// Faccio inserire all'utente la propria email
// Attraverso l'input che viene dato controllo se fa parte di quelle registrate
// Do una riposta in base alla corrispondenza tra mail inserita e mail presenti


// Inizio creando una serie di mail
const emails = ['marco@libero.it','stefano@gmail.com', 'marcello@outlook.com', 'cassandra@gmail.com' ]
console.log(emails)

// Faccio inserire all'utente la propria email
const myEmail = prompt('Qual è la tua email?')

// Attraverso l'input che viene dato controllo se fa parte di quelle registrate

for (let i = 0; i < emails.length; i++) {
    if (emails[i] == myEmail) {
        console.log(`Log in eseguito`)
    } else {
        console.log(`Log in fallito, ritenta con una nuova mail`)
    }
}