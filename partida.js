export class Partida{
    constructor(codiP, jugador1,jugador2){
        this.codiP = codiP;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.fitxes = [ [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
                    [1,1],[1,2],[1,3],[1,4],[1,5],[1,6],
                [2,2],[2,3],[2,4],[2,5],[2,6],[3,3],[3,4],[3,5],
            [3,6],[4,4],[4,5],[4,6],[5,5],[5,6],[6,6] ];
    }

    //getters&&setters
    get codiP(){
        return this.codiP;
    }

    get jugador1(){
        return this.jugador1;
    }

    get jugador2(){
        return this.jugador2;
    }

    get fitxes(){
        return this.fitxes;
    }

    set codiP(codiP){
        this.codiP = codiP;
    }

    set jugador1(jugador1){
        this.jugador1 = jugador1;
    }

    set jugador2(jugador2){
        this.jugador2 = jugador2;
    }

    set fitxes(fitxes){
        this.fitxes = fitxes;
    }

    barrejarFitxes(){
        var f = this.fitxes, n = f.length, aux, nRandom;

        while(0 !== n){
            nRandom = Math.floor(Math.random() * n);
            n -= 1;

            aux = f[n];
            f[n] = f[nRandom];
            f[nRandom] = aux;
        }

        fitxes(f);
    }
}