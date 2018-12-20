"use strict";
function parseUrl() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get('id');
    return Number(param) + 1;
}
function fetchDetails() {
    console.log("Hello");
    console.log('https://pokeapi.co/api/v2/pokemon/' + parseUrl() + '/');
    fetch('https://pokeapi.co/api/v2/pokemon/' + parseUrl() + '/').then(function (reponse) {
        reponse.json().then(function (details) {
            buildDetailsTable(details);
        });
    });
}
function buildDetailsTable(details) {
    var table = document.createElement('table');
    var headLine = table.appendChild(document.createElement('tr'));
    var th1 = headLine.appendChild(document.createElement('th'));
    var th2 = headLine.appendChild(document.createElement('th'));
    var th3 = headLine.appendChild(document.createElement('th'));
    var th4 = headLine.appendChild(document.createElement('th'));
    th1.appendChild(document.createTextNode('Name'));
    th2.appendChild(document.createTextNode('Image'));
    th3.appendChild(document.createTextNode('Weight'));
    th4.appendChild(document.createTextNode('Abilities'));
    var tr1 = table.appendChild(document.createElement('tr'));
    var td1 = tr1.appendChild(document.createElement('td'));
    var td2 = tr1.appendChild(document.createElement('td'));
    var td3 = tr1.appendChild(document.createElement('td'));
    td1.appendChild(document.createTextNode(details.name));
    var element = document.createElement('img');
    element.setAttribute('src', details.sprites.front_default);
    td2.appendChild(element);
    td3.appendChild(document.createTextNode(details.weight));
    for (var i = 0; i < details.abilities.length; i++) {
        var tr = table.appendChild(document.createElement('tr'));
        var td1_1 = tr.appendChild(document.createTextNode('-'));
        var td2_1 = tr.appendChild(document.createTextNode('-'));
        var td3_1 = tr.appendChild(document.createTextNode('-'));
        var td4 = tr.appendChild(document.createElement('td'));
        td4.appendChild(document.createTextNode(details.abilities[i].ability.name));
    }
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('Details ' + details.name));
    document.body.appendChild(document.createElement('h1'));
    document.body.appendChild(table);
    var button = document.createElement('BUTTON');
    button.appendChild(document.createTextNode('Back to list'));
    button.addEventListener('click', function (event) {
        window.location.replace('index.html');
    });
    th2.appendChild(button);
    document.body.appendChild(button);
}
fetchDetails();
