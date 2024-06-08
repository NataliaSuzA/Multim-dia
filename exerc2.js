
function calcular(){
    var idade = parseFloat(document.getElementById('idade').value);
    
    if(idade < 5) {
        document.write("<h1>indefinido</h1>");
    }
    
    else if(idade >= 5 && idade <= 7) {
        
        document.write("<h1>infantil A</h1>");
    }
    else if(idade >= 8 && idade <= 10) {
        
        document.write("<h1>Infantil B</h1>");
    }
    else if (idade >= 11 && idade <= 13){
        
        document.write("<h1>Juvenil A</h1>");
    }
    else if (idade >= 14 && idade <= 17){
        
        document.write("<h1>Juvenil B</h1>");
    }
    else {
        
        document.write("<h1>Senior</h1>");
    }
}
