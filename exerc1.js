function calcular() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var IMC = (peso / (altura*altura));
    if(IMC< 20) {
        
        document.write("<h1>Abaixo do peso</h1>");
    }
    else if(IMC > 20 && IMC < 25) {
        
        document.write("<h1>Peso Ideal</h1>");
    }
    else {
        
        document.write("<h1>Acima do Peso</h1>");
    }
}