let pokemonList;

function fetchPokemonList() {
    fetch('https://pokeapi.co/api/v2/pokemon/').then(reponse => {
        reponse.json().then(pokelist => {
            buildTable(pokelist.results);
        })
    })
}

function buildTable(results: ({name: string, url: string})[]) {
    let table = document.createElement('table');
    let headLine = table.appendChild(document.createElement('tr'));
    let th1 = headLine.appendChild(document.createElement('th'));
    let th2 = headLine.appendChild(document.createElement('th'));

    th1.appendChild(document.createTextNode('Name'));
    th2.appendChild(document.createTextNode('Details'));

   for(let i = 0; i < results.length; i++) {
        let tr = table.appendChild(document.createElement('tr'));
        let th1 = tr.appendChild(document.createElement('td'));
        let th2 = tr.appendChild(document.createElement('td'));
        let button = document.createElement('BUTTON');
        button.appendChild(document.createTextNode('Details'));
        button.addEventListener('click', function(event){
            console.log(i);
            window.location.replace('details.html?id=' + i);
        })
        th2.appendChild(button);
        th1.appendChild(document.createTextNode(results[i].name));
    }
    document.body.appendChild(table);
}

fetchPokemonList();