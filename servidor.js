var http = require("http");
var url = require("url");

function iniciar() {
    function onRequest(request, response) {
        var ruta = url.parse(request.url).pathname;
        console.log("Petició per a  " + ruta + " rebuda.");
        response.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        response.write('camí: ' + ruta + '\n');

        var consulta = url.parse(request.url, true).query;
        response.write('consulta: ' + url.parse(request.url).query + '\n');
        response.write('parametre: ' + consulta.parametre + '\n');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;