class Moradias{
    constructor(id, tipo, quartos, alugada, endereço ){
        this.id = id;
        this.tipo = tipo;
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

    exibir(){

        console.log('a moradia ' + this.id + 'é um(a) ' +  this.tipo +' com ' +  this.quartos + 'quartos, localizada na ' + this.endereço + ' e esta alugada: ' +  this.alugar());
    }
}

//
function listarDisponiveis(Moradias) {
    return Moradias.filter(estaLiberada) 
  }
  
  function estaLiberada(Moradias){
    return Moradias.alugada == false
  }

var Moradia = new Moradias (1,"casa", 3, true, "rua Alvez,123");
var Moradia1 = new Moradias (2, "casa", 4, false, "rua joão, 23");
var Moradia2 = new Moradias (3, "loft", 0, true, "rua Laranjeiras, 89");
var Moradia3 = new Moradias (4, "apartamento", 2, false, "rua Jaques, 786");
var Moradia4 = new Moradias (5, "apartamento", 1, true, "rua Amendoin, 56");

console.log(`a casa possui ${Moradia1.quartos} quartos`);

let Residencias = [Moradia, Moradia1, Moradia2, Moradia3, Moradia4]

//
Moradia.exibir();

let residenciasDisponiveis = [];
 residenciasDisponiveis = listarDisponiveis(Residencias)

var A = new Moradias (residenciasDisponiveis);
console.log(residenciasDisponiveis);

residenciasDisponiveis.forEach(function(frase) {
    A.exibir();
});


