
function parseUrl(): number{
    let url_string = window.location.href;
    let url = new URL(url_string);
    let param = url.searchParams.get('id');
    return Number(param) + 1;
}

function fetchDetails() {
    console.log("Hello")
    console.log('https://pokeapi.co/api/v2/pokemon/' + parseUrl() + '/')    
    fetch('https://pokeapi.co/api/v2/pokemon/' + parseUrl() + '/').then(reponse => {
        reponse.json().then(details => {
            buildDetailsTable(details);
        })
    })
}

function buildDetailsTable(details: any) {
    let table = document.createElement('table');
    let headLine = table.appendChild(document.createElement('tr'));
    let th1 = headLine.appendChild(document.createElement('th'));
    let th2 = headLine.appendChild(document.createElement('th'));
    let th3 = headLine.appendChild(document.createElement('th'));
    let th4 = headLine.appendChild(document.createElement('th'));

    th1.appendChild(document.createTextNode('Name'));
    th2.appendChild(document.createTextNode('Image'));
    th3.appendChild(document.createTextNode('Weight'));
    th4.appendChild(document.createTextNode('Abilities'));

    let tr1 = table.appendChild(document.createElement('tr'));
    let td1 = tr1.appendChild(document.createElement('td'));
    let td2 = tr1.appendChild(document.createElement('td'));
    let td3 = tr1.appendChild(document.createElement('td'));
    

    td1.appendChild(document.createTextNode(details.name));
    let element = document.createElement('img');
    element.setAttribute('src', details.sprites.front_default);
    td2.appendChild(element);

    td3.appendChild(document.createTextNode(details.weight));

    for(let i = 0; i < details.abilities.length; i++) {
        let tr = table.appendChild(document.createElement('tr'));
        let td1 = tr.appendChild(document.createTextNode('-'));
        let td2 = tr.appendChild(document.createTextNode('-'));
        let td3 = tr.appendChild(document.createTextNode('-'));
        let td4 = tr.appendChild(document.createElement('td'));
        td4.appendChild(document.createTextNode(details.abilities[i].ability.name));
    }

    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('Details ' + details.name));
    document.body.appendChild(document.createElement('h1'))
    document.body.appendChild(table);

    let button = document.createElement('BUTTON');
        button.appendChild(document.createTextNode('Back to list'));
        button.addEventListener('click', function(event){
            window.location.replace('index.html');
        })
        th2.appendChild(button);
    document.body.appendChild(button);
}

fetchDetails();