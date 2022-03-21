var kepek = document.querySelector('.aktualis');

var kepTomb = ['kepek/_DSC7025.jpg', 'kepek/_DSC7365.jpg', 'kepek/_DSC7371_1.jpg', 'kepek/_DSC7444.jpg', 'kepek/_DSC7515.jpg'];

var i = 0;

function balra(){
    if(i<=0) i = kepTomb.length;
    i--;
    return kepetBeallit();
}

function jobbra(){
    if(i >= kepTomb.length-1) i = -1;
    i++;
    return kepetBeallit();
}

function kepetBeallit(){
    return kepek.setAttribute('src',kepTomb[i]);
}