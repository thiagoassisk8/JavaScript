const fabricantes = ['Mercedes','Audi','BMW']

function mostrar(){
    fabricantes.map(nome => console.log(`${fabricantes.indexOf(nome)}. ${nome}`))
}
mostrar()

function imprimir(nome,indice){
    console.log(`${indice+1}.${nome}`)
}

fabricantes.forEach(imprimir)