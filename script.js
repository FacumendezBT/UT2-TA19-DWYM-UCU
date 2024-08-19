const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwdMin = 8;

window.onload = () => {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const passwd = document.getElementById('passwd');

    nombre.addEventListener('input', (event) => {
        validarNombre(event.target.value);
    });
    email.addEventListener('input', (event)=>{
        validarEmail(event.target.value);
    });
    passwd.addEventListener('input', (event)=>{
        validarPasswd(event.target.value);
    });
}

function validarEmail(emailContent) {
    if (!emailRegexp.test(emailContent) || emailContent.length == 0) {
        email.classList.remove('is-success');
        email.classList.add('is-danger');
        email.parentElement.parentElement.querySelector('.help.is-danger').classList.remove('is-hidden');
        email.parentElement.parentElement.querySelector('.help.is-success').classList.add('is-hidden');
    } else {
        email.classList.remove('is-danger');
        email.classList.add('is-success');
        email.parentElement.parentElement.querySelector('.help.is-danger').classList.add('is-hidden');
        email.parentElement.parentElement.querySelector('.help.is-success').classList.remove('is-hidden');
    }
    actualizarBoton();
}

function validarNombre() {
    if (nombre.value.length == 0) {
        nombre.classList.remove('is-success');
        nombre.classList.add('is-danger');
        nombre.parentElement.parentElement.querySelector('.help.is-danger').classList.remove('is-hidden');
        nombre.parentElement.parentElement.querySelector('.help.is-success').classList.add('is-hidden');
    } else {
        nombre.classList.remove('is-danger');
        nombre.classList.add('is-success');
        nombre.parentElement.parentElement.querySelector('.help.is-danger').classList.add('is-hidden');
        nombre.parentElement.parentElement.querySelector('.help.is-success').classList.remove('is-hidden');
    }
    actualizarBoton();
}

function validarPasswd() {
    if (passwd.value.length < passwdMin) {
        passwd.classList.remove('is-success');
        passwd.classList.add('is-danger');
        passwd.parentElement.parentElement.querySelector('.help.is-danger').classList.remove('is-hidden');
        passwd.parentElement.parentElement.querySelector('.help.is-success').classList.add('is-hidden');
    } else {
        passwd.classList.remove('is-danger');
        passwd.classList.add('is-success');
        passwd.parentElement.parentElement.querySelector('.help.is-danger').classList.add('is-hidden');
        passwd.parentElement.parentElement.querySelector('.help.is-success').classList.remove('is-hidden');
    }
    actualizarBoton();
}

function actualizarBoton(){
    if (nombre.classList.contains('is-success') && email.classList.contains('is-success') && passwd.classList.contains('is-success')) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}