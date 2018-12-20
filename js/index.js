"use strict";
var pokemonList;
function fetchPokemonList() {
    fetch('https://pokeapi.co/api/v2/pokemon/').then(function (reponse) {
        reponse.json().then(function (pokelist) {
            buildTable(pokelist.results);
        });
    });
}
function buildTable(results) {
    var table = document.createElement('table');
    var headLine = table.appendChild(document.createElement('tr'));
    var th1 = headLine.appendChild(document.createElement('th'));
    var th2 = headLine.appendChild(document.createElement('th'));
    th1.appendChild(document.createTextNode('Name'));
    th2.appendChild(document.createTextNode('Details'));
    var _loop_1 = function (i) {
        var tr = table.appendChild(document.createElement('tr'));
        var th1_1 = tr.appendChild(document.createElement('td'));
        var th2_1 = tr.appendChild(document.createElement('td'));
        var button = document.createElement('BUTTON');
        button.appendChild(document.createTextNode('Details'));
        button.addEventListener('click', function (event) {
            console.log(i);
            window.location.replace('details.html?id=' + i);
        });
        th2_1.appendChild(button);
        th1_1.appendChild(document.createTextNode(results[i].name));
    };
    for (var i = 0; i < results.length; i++) {
        _loop_1(i);
    }
    document.body.appendChild(table);
}
fetchPokemonList();
