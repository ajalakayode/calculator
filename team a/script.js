
function calculate(){
    const principalInput = document.getElementById('principal')
    const rateInput = document.getElementById('rate')
    const timeInput = document.getElementById('time')

    const interestOutput  = document.getElementById('total-interest')

    let principal = principalInput.value
    let rate = rateInput.value/100
    let time = timeInput.value

    const result = principal*rate*time


    interestOutput.textContent = result
}


