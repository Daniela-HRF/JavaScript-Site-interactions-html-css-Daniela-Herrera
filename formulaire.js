let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Envoi du form detecté !')



    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')


    //email
    let email = document.querySelector('#email')

    if(email.value == ''){

        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas être vide"

        errorList.appendChild(err)
    } else{
        email.classList.add('success')
        errorContainer.classList.remove('visible')

    }


    // pseudo check
    let name = document.querySelector('#name')

if(name.value.length < 2){
    errorContainer.classList.add('visible')
    name.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Le champ name doit contenir au moins 2 caractères"

    errorList.appendChild(err)
    } else{
        name.classList.add('success')
    }

    //password
    let paswordInitial = document.querySelector('#password')
    let password = document.querySelector('#password2')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if(password.value.length < 2 || passCheck.test(password.value) == false){
        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

        errorList.appendChild(err)
    } else{
        password.classList.add('success')
    }
    


// entrer à nouveau le mot de passe
let passwordInitial = document.querySelector('#password')
let passwordRepeat = document.querySelector('#password2')

if(passwordInitial.value != passwordRepeat.value){
    errorContainer.classList.add('visible')
    passwordRepeat.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Les mots de passes sont différents"

    errorList.appendChild(err)  
} else{
    passwordRepeat.classList.add('success')
}

let successContainer = document.querySelector('.message-success')
successContainer.classList.remove('visible')

if(
    pseudo.classList.contains('success') &&
    email.classList.contains('success') &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains('success')
){
    successContainer;classList.add('visible')
}

})


// pseudo check





