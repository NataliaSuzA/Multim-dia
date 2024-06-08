
var cA = 0
var cB = 0
var Nulo = 0
var Branco = 0
var result = 0

function candidatoA(){
    cA += 1;
}
function candidatoB(){
    cB += 1;
}
function votoNulo(){
    Nulo += 1;
}
function votoBranco(){
    Branco += 1;
}
function resultado(){
    result = (cA + cB + Nulo + Branco);
    document.write("<h2> A porcentagem de votos do candidato A </h2>" + ((cA/result)* 100) + " % ");
    document.write("<h2> A porcentagem de votos do candidato B </h2>" + ((cB/result)* 100) + " % ");
    document.write("<h2> A porcentagem de votos nulos </h2>" + ((Nulo/result)* 100)+ " % ");
    document.write("<h2> A porcentagem de votos em branco </h2>" + ((Branco/result)* 100)+ " % ");
}
