const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
}

function checkInputs() {
    const usernameValue = usernameValue.trim()
    const emailValue = emailValue.trim()
    const passwordValue = passwordValue.trim()
    const passwordtwoValue = passwordtwoValue.trim()


    if(usernameValue === '') {
        //mostrar o erro
        //adicionar a classe error
        errorValidation(username, 'Preencha esse campo')
    }
    else{
        //adicionar a classe de sucesso
        successValidation(username)
    }
    if(emailValue === '') {
}   else {
    successValidation(email)
}
    if(passwordValue === '') {
        errorValidation(password, 'Preencha esse campo')
    }
    else if (passwordValue.length < 8) {
        errorValidation(password, 'A senha deve conter mais de 8 dígitos')
    } else {
        successValidation(password)
    }
     if(passwordtwoValue ==='') {
         errorValidation(passwordtwo, 'Preencha esse campo')
     } else if (passwordValue !== passwordValue) {
         errorValidation(passwordtwo, 'A Senha não é a mesma')
     } else {
         successValidation(passwordtwo)
     }

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

