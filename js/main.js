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
//devo crearmi una costante che mi salvi/prenda l'input del select


const createGridSquare = (number) => {
    const gridElement = document.createElement('div');
    gridElement.classList.add('square');
    gridElement.innerHTML = `
    <span>${number}</span>`;
    return gridElement;
}

/**
 *
 * @param {*} number value of square printed on DOM (100 - 81 - 49 )
 */
function generateSquareWithNumber(number) {
    let squareContainer = document.getElementById('square-container');
    let i = 1;
while (i <= number) {
    const activeSquare = createGridSquare(i);
    activeSquare.addEventListener('click', function () {
        this.classList.toggle('clicked');
    });
    squareContainer.appendChild(activeSquare);
    i++;
    }
}

/**
 *
 * @param {*} value is argoument taken from user input variable difficult
 */

const chooseDifficult = (value) => {
    if (value == 1) {
        generateSquareWithNumber(100);
    } else if (value == 2) {
        generateSquareWithNumber(81);
    } else {
        generateSquareWithNumber(49);
    }
}
let difficult = document.querySelector('#difficult').value;
/* chooseDifficult(difficult); */

document.querySelector('#my-play').addEventListener('click', function () {
    chooseDifficult(difficult)
});

















