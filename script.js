//toda vez que apertar um botão o valor do mesmo seja inpreço na div de resposta;
function insert(num){
    var res = document.getElementById('resultado');//busca a div e adiciona o valor de cada button
    res.innerHTML +=num
}
function clean(){
    document.getElementById('resultado').innerHTML = ''//aciona a função C da calculadora
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);//permite apagar apenas o numero desejado
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)//calcula o valor indicado pela div
    }
}