// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"





//esercizio dadi

let dadoUtente = parseInt((Math.random() * 6) + 1)
let dadoComputer = parseInt((Math.random() * 6) + 1)
let play
console.log(dadoUtente , dadoComputer);

play = prompt(`Digita "play" per giocare`)

if(play === "play"){
    alert("il tuo dado ha fatto " + dadoUtente);
    alert("il dado del computer ha fatto " + dadoComputer);
    if(dadoUtente > dadoComputer){
        alert("Hai vinto!");
    }
    else if(dadoUtente == dadoComputer){
        alert("Pareggio! Riprova e sarai più fortunato")
    }
    else{
        alert("Mi dispiace, hai perso! Riprova e sarai più fortunato")
    }
}
