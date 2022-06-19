function sortiraj() {
    if (document.getElementById('naziv').checked) {
        //var cards = document.getElementsByClassName('col-lg-4');
        var cards = Array.from(document.getElementById('animals').children).slice();
        var nms = document.getElementsByTagName('h4');
        var names = [];
        for (let i = 1; i < nms.length; i++) names.push(nms[i].innerText);
        for (let i = 0; i < names.length - 1; i++) {
            for (let j = i + 1; j < names.length; j++) {
                if (names[i].toLowerCase() > names[j].toLowerCase()) {
                    let temp = names[i];
                    names[i] = names[j];
                    names[j] = temp;
                    temp = cards[i];
                    cards[i] = cards[j];
                    cards[j] = temp;
                }
            }
        }
        let animals = document.getElementById('animals');
        animals.innerHTML = '';
        for (let i = 0; i < cards.length; i++)
            document.getElementById('animals').appendChild(cards[i]);
    } else if (document.getElementById('godine').checked) {
        var years = document.getElementsByClassName('years');
        var cards = Array.from(document.getElementById('animals').children).slice();
        var yrs = []
        for (let i = 0; i < years.length; i++) {
            var year = years[i].innerText.split(' ')[0];
            if (years[i].innerText.includes("mesec")) year = 1.0 * year / 12;
            yrs.push(year);
        }
        for (let i = 0; i < yrs.length - 1; i++) {
            for (let j = i + 1; j < yrs.length; j++) {
                if (yrs[i] > yrs[j]) {
                    let temp = yrs[i];
                    yrs[i] = yrs[j];
                    yrs[j] = temp;
                    temp = cards[i];
                    cards[i] = cards[j];
                    cards[j] = temp;
                }
            }
        }
        let animals = document.getElementById('animals');
        animals.innerHTML = '';
        for (let i = 0; i < cards.length; i++)
            document.getElementById('animals').appendChild(cards[i]);
    }
}

function pretrazi() {
    let str = document.getElementById('pretraga').value;
    var years = document.getElementsByClassName('years');
    var yrs = []
    for (let i = 0; i < years.length; i++) {
        var year = years[i].innerText;
        yrs.push(year);
    }
    var nms = document.getElementsByTagName('h4');
    var names = [];
    for (let i = 1; i < nms.length; i++) names.push(nms[i].innerText);
    var cards = Array.from(document.getElementById('animals').children).slice();
    let animals = document.getElementById('animals');
    animals.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        if (yrs[i].includes(str) || names[i].includes(str)) {
            document.getElementById('animals').appendChild(cards[i]);
        }
    }
}