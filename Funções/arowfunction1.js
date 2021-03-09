function pessoa (nome,idade){
    this.nome = nome
    this.idade = idade
}
    
const pessoa1 = new pessoa('thiago',21)
console.log(pessoa1.nome)

let dobro = function(a) {
    // console.log(2 * a)
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI))