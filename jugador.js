class jugador {
    constructor(nom,puntuacio){
        this.nom = nom;
        this.puntuacio = puntuacio;
        this.fitxes = null;
    }

    //getter&&setters
    get nom(){
        return this.nom;
    }

    get puntuacio(){
        return this.puntuacio;
    }

    get fitxes(){
        return this.fitxes;
    }

    set nom(nom){
        this.nom = nom;
    }

    set puntuacio(puntuacio){
        this.puntuacio = puntuacio;
    }

    set fitxes(fitxes){
        this.fitxes = fitxes;
    }

    iniciarJoc(codiP){
        return new Partida(codiP);
    }

    entrarPartida(){}

    obtenirFitxes(){
        //assignar fitxes
    }

    llencarFitxa(){}

    prendreFitxa(){}

    rendirsePartida(){}
}