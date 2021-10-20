array = [{
    nombre: "William",
    usuario:"willdz90",
    contrasenia:"123",
    telefono:"3004602460",
    direccion:"Calle 16",
    correo:"wdiaz@upb.edu.co"
},{
    nombre: "William",
    usuario:"willdz99",
    contrasenia:"123",
    telefono:"3004602464",
    direccion:"Calle 16",
    correo:"will.diaz@upb.edu.co"
},{
    nombre: "Salvatore",
    usuario:"willdz99",
    contrasenia:"123",
    telefono:"3004602461",
    direccion:"Calle 16",
    correo:"salva.diaz@upb.edu.co"
}];

function buscarDominio(arreglo){
    arregloDominios = [];
    var counter = 0;
    var counter2 = 0;
    // console.log(elemento);
        // valores = Object.values(arreglo[counter]);
        // for(valor in valores){
        //     if(valores[valor].includes('upb.edu.co')){
        //         arregloDominios.push(arreglo[counter]);
        //     }
        // }
        // counter++;
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

arregloDom = buscarDominio(array);

for(elemento in arregloDom){
    console.table(arregloDom[elemento]);
}

function retornarCuenta(args){
    var counter = 0;
    var ocurrencias = 0;
    var nomEnco = false;
    var telEnco = false;
    var elemento = args[counter];
    for(prop in elemento){
        if(prop == "nombre"){
            if(elemento[prop].includes('a')){
                nomEnco = true;
            }
            else{
                console.log("No hay nombres con 'a'")
            }
        }else if(prop == "telefono"){
            if(elemento[prop].endsWith('4') || elemento[prop].endsWith('0')){
                telEnco = true;
            }
            else{
                console.log("No hay telefono con 4 o 0")
            }
        }
        if(nomEnco && telEnco){
            ocurrencias++;
        }
        counter++;
    }
    return ocurrencias;
}


console.log("Se han encontrado "+ retornarCuenta(arregloDom).toString() + " ocurrencias");
// module.exports.buscarDominio = buscarDominio;
// module.exports.retornarCuenta = retornarCuenta;