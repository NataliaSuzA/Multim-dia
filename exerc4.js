
function calcular(){
    var horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    var salarioMinimo = parseFloat(document.getElementById('salarioMinimo').value);
    var hora
    var salarioBruto
    var imposto
    var salarioFinal

    hora = salarioMinimo / 2
    salarioBruto = horasTrabalhadas * hora
    imposto = salarioBruto * 0.03
    salarioFinal = salarioBruto - imposto;

    document.write("<h1>Salário atual: </h1>" + "R$ "+salarioFinal);
}
