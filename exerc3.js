
function calcular(){
    var salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    var novoSalario;
    var salario15 = (salarioAtual*0.15);
    var salario10 = (salarioAtual*0.10);
    var salario5 = (salarioAtual*0.05);

    if(salarioAtual < 1000) {
        novoSalario = salarioAtual + salario15;
        document.write("Seu novo salário é: " + novoSalario);
    }
    
    else if(salarioAtual >= 1000 && salarioAtual <= 1500) {
        novoSalario = salarioAtual + salario10;
        document.write("Seu novo salário é: " + novoSalario);
    }

    else {
        novoSalario = salarioAtual + salario5;
        document.write("Seu novo salário é: " + novoSalario);
    }

}
