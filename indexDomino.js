import Jugador from './jugador';
import Partida from './partida';
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var Jugadors = [];
var jug1 = [];
var jug2 = [];
var pecesJugades = [];
var torn;
var contingut;

//repartir peces

function iniciar(encaminar,manegadorPeticions){
    function onRequest(request,respose){
        var sortida;
        var pathname = url.parse(request.url).pathname;
        var consulta = url.parse(request.url, true).query;
        var nombre = consulta['caracter'];

        contingut = encaminar(manegadorPeticion, pathname);
        if(contingut == '/desar'){
            var ruta = 'mongodb://localhost:27017';

            MongoClient.connect(ruta, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('domino');
                db.collection('jugadors').insertOne({
                    "nom": consulta.usuari,
                    "password": consulta.password,
                });
                assert.equal(err, null);
                console.log("Afegit document a col·lecció jugadors");
                response.write("Registre confirmat");
                response.end();
                client.close();
            });
        }else if (contingut == '/consultar') {
            var ruta = 'mongodb://localhost:27017';
            MongoClient.connect(ruta, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('domino');
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("consulta document a col·lecció usuaris");
              
                var cursor = db.collection('jugadors').find({});
                cursor.each(function (err, doc) {
                    assert.equal(err, null);
                    if (doc != null) {
                        response.write(doc.nom + ' ' + doc.password + '<br>');
                    }
                    else {
                        response.end();
                        client.close();
                    }
                });
            });
        }else if(contingut == '/autenticar'){
            var ruta = 'mongodb://localhost:27017';

            MongoClient.connect(rutadb, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('domino');
                var trobat = false;
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("consulta document a col·lecció usuaris");

                var cursor = db.collection('jugadors').find({});
                cursor.each(function (err, doc) {
                    assert.equal(err, null);
                    if (doc != null) {
                        if (doc.nom == consulta.usuari && doc.password == consulta.password) {
                            trobat = true;
                            response.write('Hola ' + doc.nom);
                            response.write('<form action="/partida" method="post">');
                            response.write('<input type="submit" value="Iniciar partida" />');
                            response.write('</form>');
                            response.write('<form action="/" method="post">');
                            response.write('<input type="submit" value="Logout" />');
                            response.write('</form>');
                        }
                    }else {
                        if (trobat == false) {
                            response.write('Usuari no trobat');
                            response.write('<form action="/login" method="post">');
                            response.write('<input type="submit" value="Tornar enrrere" />');
                            response.write('</form>');
                        }
                        response.end();
                    }
                }); 
                client.close();
            });
        }
    }
}