let input = document.getElementById("form").children


function Validation ()  {
    for (i=0; i <= 3; i++) {
        let input_container = input[i]
        let input_field = input_container.children[0]
        let emphasized_text = input_container.children[1]
        if (input_field.value === '') {
            input_field.style.background = "url('/images/icon-error.svg') no-repeat right"
            input_field.style.backgroundPositionX = '94%'
            input_field.style.borderColor = 'var(--red)'
            emphasized_text.classList.remove('hidden')
        } else if (i === 2) {
            if (!input_field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                emphasized_text.classList.remove('hidden')
                input_field.style.background = "url('/images/icon-error.svg') no-repeat right"
                input_field.style.backgroundPositionX = '94%'
                input_field.style.borderColor = 'var(--red)'
            } else {
                input_field.style.background = "none"
                input_field.style.borderColor = "var(--grayish-blue)"
                emphasized_text.classList.add('hidden')
            }
        } else {
            input_field.style.background = "none"
            input_field.style.borderColor = "var(--grayish-blue)"
            emphasized_text.classList.add('hidden')
        }
        
        
    }
}