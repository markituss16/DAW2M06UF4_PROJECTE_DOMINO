var id = 0;
var movimentAcertat;
var peces = [];
var pecesJugades = [];

function cridaAJAXJoc(url) {
    xhr = new XMLHttpRequest();

    if (!xhr) {
        alert('problemes amb XHR');
        return false;
    }
    xhr.onreadystatechange = callbackAJAXJoc;
    xhr.open('POST', url, true);
    xhr.send(null);
}

function callbackAJAXJoc() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            dada = JSON.parse(xhr.response);
            mostrarJoc();
        } else {
            console.log('problemes amb l\'AJAX');
        }
    }
}

function mostrarJoc(){
    var p=3;
    id = dada.id;
    tornActual = dada.torn;

    if (id == 1){
        peces = dada.peces1;
    }else if(id == 2){
        peces = dada.peces2;
    }

    for (var i=0; i<peces.length; i++){
        var img = document.createElement('img');
        img.id = peces[i];
        img.height = 90;
        img.width = 45;
        img.draggable = true;
        var srcImg = "/imatge?img=" + peces[i] + ".png";
        img.src = srcImg;
        img.className = "peca";
        img.ondragstart = function(e){
            drag(e);
        };
        document.getElementById('domino').appendChild(img);
        console.log(peces[i]);
    }

    function cridaAjaxJugada(url){
        xhr = new XMLHttpRequest();
        if (!xhr) {
            alert('problemes amb XHR');
            return false;
        }
        xhr.onreadystatechange = callbackAJAXjugada;
        xhr.open('POST', url, true); // el 3r paràmetre indica que és asíncron
        xhr.send(null);
    }
}