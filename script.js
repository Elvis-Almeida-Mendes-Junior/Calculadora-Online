//toda vez que apertar um botão o valor do mesmo seja inpreço na div de resposta;
function insert(num){
    var res = document.getElementById('resultado');
    res.innerHTML +=num
}
function clean(){
    document.getElementById('resultado').innerHTML = ''
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}