const form = document.querySelector("form");

const inputNombre = document.querySelector("#nombre"),
inputMail = document.querySelector("#mail"),
inputTelefono = document.querySelector("#telefono"),
inputEmpresa = document.querySelector("#empresa"),
inputAsunto = document.querySelector("#asunto"),
inputMensaje = document.querySelector("#mensaje"),
btnGuardar = document.querySelector("#botonEnviarContactos"),
contenedor = document.querySelector("#contenedor");

const contactos = [];

class NuevoContacto{
    constructor(nombre,mail,telefono,empresa,asunto,mensaje){
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
        this.empresa = empresa;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}

function crearHtml(){
    let html;
    for (const contacto of contactos) {
        html = `
            <div class="confirmacionMensaje__container">
                <h3>Su mensaje fue cargado exitosamente de la siguiente manera:</h3>
                
                <div class="confirmacionMensaje__contenido">
                    <p>Remitente: ${contacto.nombre}</p>
                    <p>Mensaje: ${contacto.mensaje}</p>
                </div>      
                

            </div>`;
    }
    contenedor.innerHTML += html;
}

function guardarMensaje(mensaje){
    contactos.push(mensaje);
    console.log(mensaje);
}

function crearContacto(nombre,mail,telefono,empresa,asunto,mensaje){
    nombre = inputNombre.value;
    mail = inputMail.value;
    telefono = inputTelefono.value;
    empresa = inputEmpresa.value;
    asunto = inputAsunto.value;
    mensaje = inputMensaje.value;
    
    const nuevoContacto = new NuevoContacto(nombre,mail,telefono,empresa,asunto,mensaje);
    return nuevoContacto;
}


botonEnviarContactos.onclick = () => {
    const nuevoContacto = crearContacto(nombre,mail,telefono,empresa,asunto,mensaje);
    guardarMensaje(nuevoContacto);
    crearHtml()
};