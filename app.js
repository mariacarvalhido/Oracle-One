let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function console(){
     console.log('O!')
}

function alerta(){
     alert(`Eu amo JS!`)
}

function pronpt(){
     let cidade = prompt('Digite alguma cidade brasileira:')
     alert(`Estive em ${cidade} e lembrei de vc s2`)

}

function soma(){
     let num1 = parseInt(prompt('Digite um numero inteiro:'))
     let num2 = parseInt(prompt('Digite outro numero:'))
     let sum = num1 + num2;
     alert(`${num1} + ${num2} = ${sum}`)
}
