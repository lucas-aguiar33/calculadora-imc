const button_calcular = document.querySelector("#btn_calcular");
const button_reset = document.getElementById("btn_reset");
const button_voltar = document.querySelector("#btn_voltar");
const input_altura = document.getElementById("f_altura");
const input_peso = document.getElementById("f_peso");
const resultado_imc = document.querySelector("#resultado_imc");
const res_imc = document.querySelector("#resultado_imc");
const p_situacaoAtual = document.querySelector("#situacao");
const msg_erro = document.querySelector("#erro");
const container_calculadora = document.querySelector("#container");
const container_resultado = document.querySelector("#container_result");


// EFEITOS DOS BOTÕES
button_reset.onmousedown = function(){
    button_reset.style.transform = 'scale(0.95)';
}

button_reset.onmouseup = function() {
    button_reset.style.transform = 'scale(1)';
}

button_reset.onmouseleave = function() {
    button_reset.style.transform = 'scale(1)';
}


button_calcular.onmousedown = function(){
    button_calcular.style.transform = 'scale(0.95)';
}

button_calcular.onmouseup = function() {
    button_calcular.style.transform = 'scale(1)';
}

button_calcular.onmouseleave = function() {
    button_calcular.style.transform = 'scale(1)';
}


button_voltar.onmousedown = function(){
    button_voltar.style.transform = 'scale(0.95)';
}

button_voltar.onmouseup = function() {
    button_voltar.style.transform = 'scale(1)';
}

button_voltar.onmouseleave = function() {
    button_voltar.style.transform = 'scale(1)';
}


// FUNÇÕES 

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
            resultado_imc.style.color = 'red';
            p_situacaoAtual.innerHTML = sit;
            p_situacaoAtual.style.color = 'red';
            break;
        case 'normal':
            resultado_imc.style.color = 'green';
            p_situacaoAtual.innerHTML = sit;
            p_situacaoAtual.style.color = 'green';
            break;
        case 'sobrepeso':
            resultado_imc.style.color = 'orange';
            p_situacaoAtual.innerHTML = sit;
            p_situacaoAtual.style.color = 'orange';
            break;
        case 'obesidade':
            resultado_imc.style.color = 'darkorange';
            p_situacaoAtual.innerHTML = sit;
            p_situacaoAtual.style.color = 'darkorange';
            break;
        case 'obesidade grave':
            resultado_imc.style.color = 'yellow';
            p_situacaoAtual.innerHTML += sit;
            p_situacaoAtual.style.color = 'yellow';
            break;
        default:
            p_situacaoAtual.innerHTML += 'Algo deu errado';
            break;
    }
}

function refreshPage(){
    window.location.reload();
}

button_calcular.addEventListener("click",()=>{
    const altura = Number(input_altura.value) / 100;
    const peso = Number(input_peso.value);

    if((altura < 0 || altura === 0 || altura === null || altura === undefined) || (peso < 0 || peso === 0 || peso === null || peso === undefined)){
        msg_erro.innerHTML = 'Informe valores válidos para os campos';
        msg_erro.style.fontWeight = 'bold';
        msg_erro.style.display = 'block';
        msg_erro.style.animation = 'Popover .8s ease-in infinite';

        setTimeout(()=>{
            msg_erro.style.display = 'none';
            input_altura.value = '';
            input_peso.value = '';
        }, 5000)

    } else {
        container_calculadora.classList.toggle('ativo');
        container_resultado.classList.toggle('ativo');

        resultado(calcularIMC(altura, peso));
        input_altura.value = '';
        input_peso.value = '';  
    }
});

button_voltar.addEventListener("click", refreshPage);