var server = require("./servidor");
var encaminador = require("./encaminador");
var manegador = require("./manegador");

var manegadors = {};
/*manegadors["/"] = manegadorPeticions.iniciar;
manegadors["/iniciar"] = manegadorPeticions.iniciar;
manegadors["/pujar"] = manegadorPeticions.pujar;*/

server.iniciar(encaminador.encaminar, manegadors);