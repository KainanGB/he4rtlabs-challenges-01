const button = document.getElementById('button')
const resultado = document.getElementById('resultado')
const hide = document.querySelector('.result')



button.addEventListener('click', () =>{
   const horasDia = document.querySelectorAll('.inputs')[0].value
    diasSemana = document.querySelectorAll('.inputs')[1].value,
    ferias = document.querySelectorAll('.inputs')[2].value,
    valorTotal = document.querySelectorAll('.inputs')[3].value
   
   let valorHora = valorTotal / (diasSemana * 4 * horasDia) + ( ferias * diasSemana * horasDia)
   
    if(isNaN(valorHora)){
      let hidden = () => hide.setAttribute('style', 'opacity: 0;');
      hide.removeAttribute('style')
      setTimeout(hidden, 5000)
        return resultado.innerHTML= 'Preencha todos os valores corretamente'.fontcolor('#c295d8')
   } 
   else {
    hide.removeAttribute('style')
     return resultado.innerHTML= `Valor p/hora: ${valorHora.toFixed(2)}R$`
  }
})