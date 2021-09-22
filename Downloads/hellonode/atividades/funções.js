function posterior(num) {
    let post = num + 1
    return post
}

let retorno = posterior(100)
console.log('o número posterior a 100 é: ' + retorno)
console.log(' o número posterior a 2 é: ' + posterior(2))

function metade(num) {
    let met = num/2
    return met
}

let retor = metade(100)
console.log('a metade do número 100 é : ' + retor)

console.log('a metade do número posterior a 29 é: ' + metade(posterior(29)))

function pares(n1,n2) {
    console.log('os números pares entre 10 e 20 são: ')
   for(let num=n1; num <= n2; num+=2){
       console.log(num)
   }
}

let ret = pares(10,20)
