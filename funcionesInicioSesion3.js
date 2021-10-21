// var datos = {
//     correo: "",
//     password: ""
// }

// array = [{
//     nombre: "William",
//     usuario:"willdz90",
//     contrasenia:"123",
//     telefono:"3004602460",
//     direccion:"Calle 16",
//     correo:"wdiaz@upb.edu.co"
// },{
//     nombre: "William",
//     usuario:"willdz99",
//     contrasenia:"1234",
//     telefono:"3004602464",
//     direccion:"Calle 16",
//     correo:"will.diaz@upb.edu.co"
// },{
//     nombre: "Salvatore",
//     usuario:"willdz99",
//     contrasenia:"12345",
//     telefono:"3004602461",
//     direccion:"Calle 16",
//     correo:"salva.diaz@upb.edu.co"
// }];


// const email = document.querySelector("#campoUsuarioCorreo");
// const password = document.querySelector("#campoUsuarioContrasena");
// const formulario = document.querySelector(".formulario");

// console.log(correo);

// email.addEventListener("input", leerTexto);
// password.addEventListener("input", leerTexto);

// El evento de submit
// formulario.addEventListener('submit', function (evento) {
//     evento.preventDefault();
//     // validar el formulario
//     //creando las variables para hacer la validacion - se extraen del objeto datos
//     const {
//         email,
//         password
//     } = datos; // Destructuring de objeto
//     if (email === "" || password === "") {
//         //funcion mensajeError
//         mostrarAlerta("Todos los campos son obligatorios", true);
//         return; // corta la ejecucion del codigo
//     } else {
//         // enviar el formulario
//         mostrarAlerta("Datos enviados correctamente");
//         // console.log(datos);
//         //https://jsonplaceholder.typicode.com/guide/
//         // fetch('http://localhost:4040/add', {
//         //         method: 'POST',
//         //         body: JSON.stringify(datos),
//         //         headers: {
//         //             'Content-type': 'application/json; charset=UTF-8',
//         //         },
//         //     })
//         //     .then((response) => response.json())
//         //     .then((json) => console.log(json));
//     }
// });

// function leerTexto(e) {
//     datos[e.target.id] = e.target.value;
//     // console.log(datos);
// }

// function mostrarAlerta(mensaje, error = null) {
//     const alerta = document.createElement("p");
//     alerta.textContent = mensaje;

//     if (error) {
//         alerta.classList.add("error");
//     } else {
//         alerta.classList.add("correcto");
//     }

//     formulario.appendChild(alerta);
//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }

// arregloDom = buscarDominio(array);

// for(elemento in arregloDom){
//     console.table(arregloDom[elemento]);
// }


// arreglo = arregloDom;
// correo = "salva.diaz@upb.edu.co";
// contrasena = "12345";
// console.log(contrasena);
// console.log(verificarInicioSesion3(correo, contrasena, arreglo));


function verificarInicioSesion3(correo, contrasena, arreglo){
    var counter1 = 0;
    for (objeto in arreglo){
        elemento = arreglo[counter1];
        // console.log(elemento.contrasenia);
        if((elemento.correo==correo) && (elemento.contrasenia==contrasena)){
            // var x = prompt("Cual es el factorial de 6?",x);
            // console.log(verificarCaptcha3(x));
            return x;
        } else {
            return false;
        }
    }
    counter1++;
        // console.log(counter1);
}


function verificarCaptcha3(respuesta){
    if (respuesta==720){
        return true;
    } else {
        return false;
    }
}


function buscarDominio(arreglo){
    arregloDominios = [];
    var counter = 0;
    var counter2 = 0;
    for(objeto in arreglo){
        elemento = arreglo[counter2];
        for(prop in elemento){
            // console.log(prop);
            if(prop == "correo"){
                // console.log("Leyo propiedad correo");
                // console.log(elemento[prop].includes('upb.edu.co'));
                if(elemento[prop].includes('upb.edu.co')){
                    // console.log("Encontro dominio");
                    arregloDominios.push(elemento);
                    // console.log(arregloDominios);
                }
                else{
                    console.log("No se encontro correo")
                }
            }
            counter++;
        }
        counter2++;
        counter=0;
    }
    return arregloDominios;
}




// var validado=true;
// verificarCaptcha3(validado);

// function retornarCuenta(args){
//     var counter = 0;
//     var ocurrencias = 0;
//     var nomEnco = false;
//     var telEnco = false;
//     var elemento = args[counter];
//     for(prop in elemento){
//         if(prop == "nombre"){
//             if(elemento[prop].includes('a')){
//                 nomEnco = true;
//             }
//             else{
//                 console.log("No hay nombres con 'a'")
//             }
//         }else if(prop == "telefono"){
//             if(elemento[prop].endsWith('4') || elemento[prop].endsWith('0')){
//                 telEnco = true;
//             }
//             else{
//                 console.log("No hay telefono con 4 o 0")
//             }
//         }
//         if(nomEnco && telEnco){
//             ocurrencias++;
//         }
//         counter++;
//     }
//     return ocurrencias;
// }
module.exports.buscarDominio = buscarDominio;
module.exports.verificarInicioSesion3=verificarInicioSesion3;
module.exports.verificarCaptcha3=verificarCaptcha3;
// module.exports.retornarCuenta = retornarCuenta;
// module.exports.datos = datos;