//El algoritmo permite conocer el importe total de la compra con descuento y el ahorro total a partir de que el usuario ingrese el precio de lista del producto

alert("¡Bienvenido a nuestro servicio de consulta de ahorros! Presione Enter o Aceptar para continuar");

let precio1 = prompt("Ingrese el precio del primer producto");
let precio2 = prompt("Ingrese el precio del segundo producto");

let descuento1 = 0.20;
let descuento2 = 0.30;

let precio1Oferta = ((precio1)-(precio1*descuento1));
let precio2Oferta = ((precio2)-(precio2*descuento2));

function oferta1 (precio1, descuento1) {
    precio1OfertaFunction = (precio1)-(precio1*descuento1);
}

function oferta2 (precio2, descuento2) {
    precio2OfertaFunction = (precio2)-(precio2*descuento2);
}

function descuento1Function (precio1, descuento1) {
    descuentoObtenido1 = precio1 * descuento1;
}

function descuento2Function (precio2, descuento2) {
    descuentoObtenido2 = precio2 * descuento2;
}

alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(precio1Oferta+precio2Oferta) + ".");

alert(" Está ahorrando" + " " + "AR$"+((precio1*descuento1)+(precio2*descuento2)));


let otraConsulta = prompt("¿Desea consultar otros productos? Escriba 'S' y Enter o Aceptar para continuar o culaquier tecla para cerrar")



if (otraConsulta == "S") {
    precio1 = prompt("Ingrese el precio del primer producto");
    precio2 = prompt("Ingrese el precio del segundo producto");

    oferta1 (precio1, descuento1);
    oferta2 (precio2, descuento2);
    descuento1Function (precio1, descuento1);
    descuento2Function (precio2, descuento2);

    alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(oferta1 + oferta2) + ".");

    alert(" Está ahorrando" + " " + "AR$"+(descuento1 + descuento2));
    
    
} else {
    alert("Muchas gracias por utilizar nuestro servicio. ¡Que tenga un lindo día!")
    }


otraConsulta = prompt("¿Desea consultar otros productos? Escriba 'S' y Enter o Aceptar para continuar o culaquier tecla para cerrar")