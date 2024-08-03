
function calculate(){
    const principalInput = document.getElementById('principal')
    const rateInput = document.getElementById('rate')
    const timeInput = document.getElementById('time')

    
    let principal = principalInput.value
    let rate = rateInput.value/100
    let time = timeInput.value
    const calculate = principal*rate*time
    
    const interestOutput = document.getElementById('interest')

    interestOutput.textContent = calculate  
  
}


