// nomes = ['Thiago','Lucas','Marcus','Victor']

const { indexOf } = require("lodash")

module.exports = function(...nomes){
    return nomes.map(nome => `Bom dia ${nome}!`)
    
}

const bomdiaguys = function(...nomes){
    for (let nome of nomes){
        nome = [`As pessoas que andam de skate é o ${nome}`]
        // console.log(typeof(nome))
        // return nome
        
    }
}

bomdiaguys('thiago','marcus','lucas','victor')
