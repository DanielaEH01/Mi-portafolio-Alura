const btnEnviar= document.getElementById('btn-enviar');
const validarFormulario = (e) => {
    e.preventDefault();

const nombreDeUsuario = document.getElementById ('nombre');
const direccionEmail = document.getElementById ('email');
const asuntoEmail = document.getElementById ('asunto');
const mensage = document.getElementById ('mensagem');

if(nombreDeUsuario.value === ""){
    
    alert ("Por favor escribe tu nombre");
    nombreDeUsuario.focus();
    return false;
}

if(direccionEmail.value === ""){
    alert ("Por favor escribe tu email");
    direccionEmail.focus();
    return false;
}

if(asuntoEmail.value === ""){
    alert ("Por favor escribe por qué quieres contactarme");
    asuntoEmail.focus();
    return false;
}
if(mensage.value === ""){
    alert ("Por favor dejame una breve descripción del porque estas interesado en contactarme");
    mensage.focus();
    return false;
}

return true;
};

btnEnviar.addEventListener('click', validarFormulario);

