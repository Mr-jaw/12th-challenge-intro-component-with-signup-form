let input = document.getElementById("form").children

const errormsg = [
    "First name cannot be empty",
    "Last name cannot be empty",
    "Email cannot be empty",
    "Password cannot be empty",
]

function Validation ()  {
    for (i=0; i <= 3; i++) {
        let input_container = input[i]
        let input_field = input_container.children[0]
        let emphasized_text = input_container.children[1]
        if (input_field.value === '') {
            input_field.style.background = "url('/images/icon-error.svg') no-repeat right"
            input_field.style.backgroundPositionX = '94%'
            input_field.style.borderColor = 'var(--red)'
            emphasized_text.removeAttribute('hidden')
            emphasized_text.innerText = errormsg[i]
            if (i === 2) {
                emphasized_text.innerText = "Email cannot be empty"
                input_field.style.color = 'var(--dark-blue)'
            }

            if (i === 3){
                emphasized_text.innerText = "Password canot be empty"
            }

        } else if (i === 2) {
            if (!input_field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                emphasized_text.removeAttribute('hidden')
                emphasized_text.innerText = "Looks like this not an email"
                input_field.style.background = "url('/images/icon-error.svg') no-repeat right"
                input_field.style.backgroundPositionX = '94%'
                input_field.style.borderColor = 'var(--red)'
                input_field.style.color = 'var(--red)'
            } else {
                input_field.style.background = "none"
                input_field.style.borderColor = "var(--grayish-blue)"
                input_field.style.color = 'var(--dark-blue)'
                emphasized_text.hidden = true;
            }
        } else if (i === 3) {
            if (input_field.value.length < 8) {
                emphasized_text.removeAttribute('hidden')
                emphasized_text.innerText = "Password must be atleast 8 characters long"
                input_field.style.background = "url('/images/icon-error.svg') no-repeat right"
                input_field.style.backgroundPositionX = '94%'
                input_field.style.borderColor = 'var(--red)'
            } else {
                input_field.style.background = "none"
                input_field.style.borderColor = "var(--grayish-blue)"
                input_field.style.color = 'var(--dark-blue)'
                emphasized_text.hidden = true;
            }
        } else {
            console.log('log')
            input_field.style.background = "none"
            input_field.style.borderColor = "var(--grayish-blue)"
            emphasized_text.hidden = true;
        }
        
        
    }
}