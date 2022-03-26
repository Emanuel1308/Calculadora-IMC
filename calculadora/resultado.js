const firstDiv = document.querySelector('.first-step')
const secondDiv = document.querySelector('.second-step')
const finalDiv = document.querySelector('.final-step')
function go(currentStep, nextStep) {
  let dNone, dBlock
  if (currentStep == 1) {
    dNone = firstDiv
  } else if (currentStep == 2) {
    dNone = secondDiv
  } else {
    dNone = finalDiv
  }
  dNone.style.display = 'none'

  if (nextStep == 1) {
    dBlock = firstDiv
  } else if (nextStep == 2) {
    dBlock = secondDiv
  } else {
    dBlock = finalDiv
  }
  dBlock.style.display = 'block'
}

function validate() {
  const peso = document.getElementById('peso')
  const altura = document.getElementById('altura')

  peso.style.border = 'none'
  altura.style.border = 'none'

  if (!peso.value || !altura.value) {
    if (!peso.value && !altura.value) {
      console.log('Não temos nem o peso nem a altura')
      peso.style.border = '2px solid red'
      altura.style.border = '2px solid red'
    } else if (!peso.value) {
      console.log('Não temos o peso')
      peso.style.border = '2px solid red'
    } else {
      console.log('Não temos a altura')
      altura.style.border = '2px solid red'
    }
  } else {
    let imc = peso.value / (altura.value * altura.value)
    const result = document.getElementById('result')
    if (imc < 18.5) {
      console.log('MAGREZA / OBESIDADE 0')
      result.innerHTML = 'MAGREZA / OBESIDADE 0'
      result.style.color = 'yellow'
    } else if (imc >= 18.5 && imc < 25) {
      console.log('NORMAL / OBESIDADE 0')
      result.innerHTML = 'NORMAL / OBESIDADE 0'
      result.style.color = 'green'
    } else if (imc >= 25 && imc < 30) {
      console.log('SOBREPESO / OBESIDADE |')
      result.innerHTML = 'SOBREPESO / OBESIDADE |'
      result.style.color = 'yellow'
    } else if (imc >= 30 && imc < 40) {
      console.log('OBESIDADE / OBESIDADE ||')
      result.innerHTML = 'OBESIDADE / OBESIDADE ||'
      result.style.color = 'red'
    } else {
      console.log('OBESIDADE GRAVE  / OBESIDADE |||')
      result.innerHTML = 'OBESIDADE GRAVE  / OBESIDADE |||'
      result.style.color = 'black'
    }
    go(2, 3)
  }
}
