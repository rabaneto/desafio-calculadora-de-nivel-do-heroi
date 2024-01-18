
function numeroDeVitorias (vitorias, derrotas ){
    numeroDeVitorias = vitorias - derrotas
    return numeroDeVitorias
}


let vitorias = 105
let derrotas = 5

let pontos = vitorias - derrotas  

let nivel = ""

if (vitorias <= 10 ) {
    nivel += "Ferro";
    
}else if (vitorias >= 11 && vitorias <= 20){
    nivel += "Bronze";
    console.log("")
}else if (vitorias >= 21 && vitorias <= 50 ){
    nivel += "Prata";
    console.log("")
}else if (vitorias >= 51 && vitorias <= 80){
    nivel += "Ouro";
    console.log("")
}else if (vitorias >= 81 && vitorias <= 90){
    nivel += "Diamante";
    console.log("")
}else if(vitorias >= 91 && vitorias <= 100){
    nivel += "Lendário";
    console.log("")
}else if (vitorias >= 100){
    nivel += "imortal";
    console.log("")
 
}


console.log("O Herói tem saldo de " + pontos + " vitorias e está no nivel de " + nivel)
