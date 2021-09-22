class Moradia{

    constructor(id, quartos, alugada, endereço){
        
        this.id = id;
        this.quartos = quartos;
        this.alugada = alugada;
        this.endereço = endereço;
    }

    liberar(){
        return this.alugada && true;
    }

    alugar(){
        return this.alugada && false;
    }
}

class Casa extends Moradia{

    constructor(id, quartos, alugada, endereço, quintal){

        super(id, quartos, alugada, endereço)

        this.quintal = quintal;
    }

    exibir (){
       console.log('a casa ' + this.id + ' possui ' + this.quartos + ' quartos' + ', um quintal ' + this.quintal + ' e esta localizada na ' + this.endereço);
    }
}

class Apartamento extends Moradia{

    constructor(id, quartos, alugada, endereço, andar){

        super(id, quartos, alugada, endereço)

        this.andar = andar;
    }

    exibir (){
console.log('o apartameto ' + this.id + ' possui ' + this.quartos + ' quartos' + ', fica no ' + this.quintal + ' andar e esta localizada na ' + this.endereço);
    }
}

var Casa1 = new Casa (1, 4, true, "Rua Jonas, 234", "grande");

var Apartamento1 = new Apartamento (1, 3, false, "rua Martins, 56", 3);

Casa1.exibir();
Apartamento1.exibir();