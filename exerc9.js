var otimo1 = 0
var bom2 = 0
var regular3 = 0
var ruim4 = 0
var result = 0
var idade = 0;
var totalIdade = 0.0;
var media = 0.0;

function calcularIdade(){
    idade = parseInt(document.getElementById('idade').value);
    totalIdade += idade;
}

function otimo(){
    otimo1 += 1;
}
function bom(){
    bom2 += 1;
}
function regular(){
    regular3 += 1;
}
function ruim(){
    ruim4 += 1;
}
function resultado(){
    result = (otimo1 + bom2 + regular3 + ruim4);
    media = totalIdade / result;
    
    document.getElementById('pg1').innerHTML = ("<h2>"+"Quantidade de pessoas que respondeu a pesquisa: " + result+"</h2>")
    document.getElementById('pg2').innerHTML = ("<h2>"+"Média de idade das pessoas que responderam a pesquisa: " + media+"</h2>")
    document.getElementById('pg3').innerHTML = ("<h2>"+"Porcentagem de cada uma das respostas: "+"</h2>")
    document.getElementById('pg4').innerHTML = ("<h2>"+"Ótimo: " + ((otimo1/result)* 100) + " % "+"</h2>")
    document.getElementById('pg5').innerHTML = ("<h2>"+"Bom: " + ((bom2/result)* 100) + " % "+"</h2>")
    document.getElementById('pg6').innerHTML = ("<h2>"+"Regular: " + ((regular3/result)* 100) + " % "+"</h2>")
    document.getElementById('pg7').innerHTML = ("<h2>"+"Ruim: " + ((ruim4/result)* 100) + " % "+"</h2>")
   
    
}
