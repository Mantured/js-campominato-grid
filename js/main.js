/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:  di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 */

/*

*       =>Come prima cosa devo stabilire l'imput con la quale l'utente fa un select della difficoltà
*           anche se come prima cosa sarebbe meglio puntare alle varie function
*       => intanto cerchiamo di dare una const al parent che contiene/conterrà i quadrati
*

*/

// variabile const che mi prende l'elemento del DOM

const squareContainer = document.getElementById('square-container'); // dove andrò ad aggiungere gli square con un appenChild