// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

//const baseUrl = 'https://api.nationalize.io'; //la API da un error 422 al consultarla...

const baseUrl = 'https://ghibliapi.herokuapp.com/films'; //La cambio por esta que no devuelve error...

let ourButton = document.querySelector(".ourButton");

const datos = fetch(baseUrl).then((response) => response.json()).then((data) => {

    ourButton.addEventListener("click", () => console.log(data)); 

});

/* ESTOS EJERCICIOS NO SE PUEDEN HACER, YA QUE LA API DADA NO ESTÁ FUNCIONANDO...

2.2 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.

2.3 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.

 */

/* VOY A HACER ESTOS EN SU LUGAR

2.2 Una vez mostrados los datos con el botón generado, vamos a pintar todos los datos
2.2.1 crear una función que coja los datos de la API y los guarde en el JSON
2.2.2 crear un función que itere sobre cada uno de los objetos almacenados en el JSON y pinte los elementos, mostrando el título, cartel y fecha de publicación de cada película
2.2.3 hacer que con el campo de input que hay en el HTML, se muestren solo las películas que se busquen.

*/

const billboard$$ = document.querySelector(".cartelera");
const searcher$$ = document.querySelector(".ourInput");

const ourData = async () => {

    let apiData = await fetch(baseUrl);
    let dataToJSON = await apiData.json();

    searcher$$.addEventListener("input", () => search(dataToJSON));

    draw(dataToJSON);

};

//función que coge todas las películas de dataToJSON y pinta el HTML iterando sobre los datos

const draw = (movies) => {

    billboard$$.innerHTML = ``;

    for (const movie of movies) {

        const board$$ = document.createElement("div");

        board$$.innerHTML = `
        
            <h2 class="title">${movie.title}</h2>
            <img class="image" src="${movie.image}" alt="${movie.title}" />
            <h3 class="year">${movie.release_date}</h3>

        `;
       
        billboard$$.appendChild(board$$);

    }

};

//función que genera un array en base a lo introducido en el input, y muestra el resultado de la búsqueda

const search = (movies) => {

    const filteredMovies = [];

    for (const movie of movies) {

        if (movie.title.toLowerCase().includes(searcher$$.value.toLowerCase().trim())) {
        
            filteredMovies.push(movie);

        };
    }

    draw(filteredMovies);

}


ourData();

