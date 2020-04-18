const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.getElementById('mensaje');
const btnEnviar=document.querySelector('#enviar');
const formularioEnviar=document.getElementById('enviar-email');
const resetBtn=document.getElementById('resetBtn');

eventlisteners();

function eventlisteners(){

    document.addEventListener('DOMContentLoaded',inicioApp);
    asunto.addEventListener('blur',validarCampo);

    email.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    resetBtn.addEventListener('click',resetFormulario);

    btnEnviar.addEventListener('click',enviarEmail);
}

function inicioApp(){

    btnEnviar.disabled=true;
}

function validarCampo(){
    // console.log('Dentro de la function');
    validarLongitud(this);
    
    // console.log(this.type);
    if(this.type==='email'){
            validarEmail(this);
    }

    let errores=document.querySelectorAll('.error')

    if(email.value !=='' && asunto.value !=='' && mensaje.nodeValue!==''){
        if(errores.length===0){
            btnEnviar.disabled=false;
        }
        // console.log(mensaje.value);

    }
}

function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    }
}
function validarEmail(campo){
    const mensaje=campo.value;
    if(mensaje.indexOf('@')!==-1){
        campo.style.borderBottomColor='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    }
}
function enviarEmail(e){

    const spinnerGif=document.querySelector('#spinner');
    spinnerGif.style.display='block';

    const gifEnviado=document.createElement('img');
    gifEnviado.src='img/mail.gif';
    gifEnviado.style.display='block';

    setTimeout(() => {
        spinnerGif.style.display='none';
        document.querySelector('#loaders').appendChild(gifEnviado);
        setTimeout(() => {
            gifEnviado.remove();
            document.getElementById('enviar-mail').reset();
        }, 5000);
    }, 3000);

    e.preventDefault();
    // console.log('email enviado');
}
function resetFormulario(e){
    e.preventDefault();
    document.getElementById('enviar-mail').reset();
}