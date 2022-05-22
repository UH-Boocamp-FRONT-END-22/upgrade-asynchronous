// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.

const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

/* CONVERSIÓN */

const myTimeOut = async () => {

    const timeIsGold = await runTimeOut();

    console.log(timeIsGold);

}

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();

/* CONVERSIÓN */

let getMyCharacters = async () => {

    const charactersOnApi = await fetch('https://rickandmortyapi.com/api/character');
    const charactersOnJSON = await charactersOnApi.json();

    return charactersOnJSON;

};

getMyCharacters();