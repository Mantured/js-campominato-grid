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

*       => Come prima cosa devo stabilire l'imput con la quale l'utente fa un select della difficoltà
*           anche se come prima cosa sarebbe meglio puntare alle varie function
*       => intanto cerchiamo di dare una const al parent che contiene/conterrà i quadrati
*

*/

 // dove andrò ad aggiungere gli square con un appenChild
// devo generare dei numeri che  vanno da
//    -> 1 a 100
//    -> 1 a 81 (80 numeri)
//    -> 1 a 49 (48 numeri)

//ciclo for o while tanto è molto simile
/* for (let i = 1; i <= 100; i++) {
    console.log(i);
    createGridSquare(i);
    console.log(createGridSquare(i));
}
*/

// variabile const che mi prende l'elemento del DOM


/* for (let i = 1; i <= 49; i++) {
    console.log(i);
} */

const squareContainer = document.getElementById('square-container');
const createGridSquare = (number) => {
    const gridElement = document.createElement('div');
    gridElement.classList.add('square');
    gridElement.innerHTML = `
    <span>${number}</span>`;
    return gridElement;
}


let i = 1
while (i <= 81) {


    const activeSquare = createGridSquare(i);
    activeSquare.addEventListener('click', function () {
        console.log(this);
        this.classList.add('clicked');
    })
    squareContainer.appendChild(activeSquare)
    i++;
}

