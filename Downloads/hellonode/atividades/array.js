function positivo(array){
    return array.filter(checkpositive)
}

function checkpositive(number){
    return number>0
}

const numeros = [-1, 2, -2, 3, -4, 5, -6]
console.log(positivo(numeros))
console.log('esses são os numeros positivos')

// fim atividade 1 

let moradia ={
    quatos: 2,
    tipo: "casa",
    alugada: true,

    endereço:{

        rua: "são joão",
        numero: 123
    }
}

console.log(`essa é uma ${moradia.tipo}, localizada na rua ${moradia.endereço.rua},número ${moradia.endereço.numero}. Essa residência possui ${moradia.quatos} quartos.`)

if (moradia.alugada==true){
    console.log('esta residência está alugada')
}else{
    console.log('essa residência esta indisponivel')
}

//fim atividade2 

function listarDisponiveis(moradias) {
    return moradias.filter(estaLiberada) 
  }
  
  function estaLiberada(moradia){
    return moradia.alugada == false
  }

let moradia1 ={
    quatos: 2,
    tipo: "casa",
    alugada: true,

    endereço:{

        rua: "são joão",
        numero: 123
    }
}

let moradia2 ={
    quatos: 3,
    tipo: "apartamento",
    alugada: false,

    endereço:{

        rua: "flores clares",
        numero: 478,
        prédio: "edifio são carlos",
        bloco: "D",
        n: 5
    }
}
 
let moradia3 ={
    quatos: 1,
    tipo: "loft",
    alugada: false,

    endereço:{

        rua: "são josé",
        numero: 976,
        prédio: "edifico aguas rasas"
    }
}


const residencias = [moradia1, moradia2, moradia3]

console.log(listarDisponiveis(residencias))



