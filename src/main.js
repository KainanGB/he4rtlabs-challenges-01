const horasDia = document.getElementById('horas-dia')
const diasSemana = document.getElementById('dias-semana')
const feriasProjeto = document.getElementById('ferias-projeto')
const valorTotal = document.getElementById('total-value')
const button = document.getElementById('button')
const footer = document.querySelector('footer')

button.addEventListener('click', () =>{
  let hoursPerDay = horasDia.value;
  let daysPerWeek = diasSemana.value;
  let vacPerProject = feriasProjeto.value;
  let totalValue = valorTotal.value;

  if(isNaN(hoursPerDay)){
    horasDia.value = ''
    horasDia.style.fontWeight ='800'
    horasDia.placeholder = 'Digite um valor de 1 a 24'
    button.preventDefault();
  } else if(isNaN(daysPerWeek) ){
    diasSemana.value = ''
    diasSemana.style.fontWeight ='800'
    diasSemana.placeholder = 'Digite um valor de 1 a 7'
    button.preventDefault();
  } else if(isNaN(vacPerProject) ){
    feriasProjeto.value = ''
    feriasProjeto.style.fontWeight ='800'
    feriasProjeto.style.fontSize = '13px'
    feriasProjeto.placeholder = 'Digite um valor númerico'
    button.preventDefault();
  } else if(isNaN(totalValue) ){
    valorTotal.value = ''
    valorTotal.style.fontWeight ='800'
    valorTotal.style.fontSize = '13px'
    valorTotal.placeholder = 'Digite um valor númerico'
    button.preventDefault();
  }
  let valorHora = totalValue / (daysPerWeek * 4 * hoursPerDay) + ( vacPerProject * daysPerWeek * hoursPerDay)
  if (isNaN(valorHora)){
    button.preventDefault();
  }else {
    let valorHora = totalValue / (daysPerWeek * 4 * hoursPerDay) + ( vacPerProject * daysPerWeek * hoursPerDay)
    const resultado = document.getElementById('resultado').innerHTML= `O seu valor por hora é de : ${valorHora.toFixed(2)}R$`
    footer.style.marginTop = '82px';
  }
  
});


