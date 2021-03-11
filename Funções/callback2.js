var notas = [7.7,
    5.0,
    4.8,
    9.0,
    3.8]

// Sem callback
let notasbaixas = []
const notasaltas = []

for (let i of notas){
    if (i < 7.0){        
        notasbaixas.push(i)        
    }
    else{
        notasaltas.push(i)

    }
}
console.log(notasbaixas)

//Com callback
notasbaixas = notas.filter(function(nota){
    return nota < 7
})