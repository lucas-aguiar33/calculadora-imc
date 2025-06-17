const button_calcular = document.querySelector("#btn_calcular");
const button_reset = document.getElementById("btn_reset");
const input_altura = document.getElementById("f_altura");
const input_peso = document.getElementById("f_peso");
const resultado_imc = document.querySelector("#resultado_imc");
const res_imc = document.querySelector("#resultado_imc");
const p_situacaoAtual = document.querySelector("#situacao");



button_reset.onmousedown = function(){
    button_reset.style.transform = 'scale(0.95)';
}

button_reset.onmouseup = function() {
    button_reset.style.transform = 'scale(1)';
}

button_reset.onmouseleave = function() {
    button_reset.style.transform = 'scale(1)';
}


const calcularIMC = (a, p) => {
    const imc = p / a**a;
    let dados = {
        imc: imc,
        situacao:'',
    }

    if(imc < 18.5){
        dados.situacao = 'Magreza';
    } 
    if(imc >= 18.5 && imc < 25){
        dados.situacao = 'Normal';
    } 
    if(imc >= 25 && imc < 30.0){
        dados.situacao = 'Sobrepeso';
    } 
    if(imc >= 30.0 && imc < 40.0){
        dados.situacao = 'Obesidade';
    } 
    if(imc >= 40.0){
        dados.situacao = 'Obesidade grave';
    }

    return dados;
}


const resultado = (callback) => {
    const sit = callback.situacao;
    let situacao = sit.toLowerCase();

    resultado_imc.innerHTML += callback.imc.toFixed(1);

    situacao.toLowerCase();
    switch(situacao){
        case 'magreza':
            p_situacaoAtual.innerHTML += situacao;
            break;
        case 'normal':
            p_situacaoAtual.innerHTML += situacao;
            break;
        case 'sobrepeso':
            p_situacaoAtual.innerHTML += situacao;
            break;
        case 'obesidade':
            p_situacaoAtual.innerHTML += situacao;
            break;
        case 'obesidade grave':
            p_situacaoAtual.innerHTML += situacao;
            break;
        default:
            p_situacaoAtual.innerHTML += 'Algo deu errado';
            break;
    }
}

button_calcular.addEventListener("click",()=>{
    const altura = Number(input_altura.value);
    const peso = Number(input_peso.value);
    resultado(calcularIMC(altura, peso));
    input_altura.value = "";
    input_peso.value = "";
    

});