//El algoritmo permite conocer el importe total de la compra con descuento y el ahorro total a partir de que el usuario ingrese el precio de lista del producto

alert("¡Bienvenido a nuestro servicio de consulta de ahorros! Presione Enter o Aceptar para continuar");

let precio1 = prompt("Ingrese el precio del primer producto");
let precio2 = prompt("Ingrese el precio del segundo producto");

const descuento1 = 0.20;
const descuento2 = 0.30;

function oferta1 (precio1, descuento1) {
return (precio1)-(precio1*descuento1)
}

function oferta2 (precio2, descuento2) {
return (precio2)-(precio2*descuento2)
}

function descuento1Importe (precio1, descuento1) {
return precio1 * descuento1
}

function descuento2Importe (precio2, descuento2) {
return precio2 * descuento2;
}

alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(oferta1(precio1,descuento1)+oferta2(precio2,descuento2)) + ".");

alert(" Está ahorrando" + " " + "AR$"+(descuento1Importe(precio1,descuento1)+descuento2Importe(precio2,descuento2)));


let otraConsulta = prompt("¿Desea consultar otros productos? Escriba 'S' y Enter o Aceptar para continuar o culaquier tecla para cerrar")


if (otraConsulta == "S") {
    
    let precio1 = prompt("Ingrese el precio del primer producto");
    let precio2 = prompt("Ingrese el precio del segundo producto");

    function oferta1 (precio1, descuento1) {
        return (precio1)-(precio1*descuento1)
    }
    
    function oferta2 (precio2, descuento2) {
        return (precio2)-(precio2*descuento2)
    }
    
    function descuento1Importe (precio1, descuento1) {
        return precio1 * descuento1
    }
    
    function descuento2Importe (precio2, descuento2) {
        return precio2 * descuento2;
    }
    
    alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(oferta1(precio1,descuento1)+oferta2(precio2,descuento2)) + ".");
    
    alert(" Está ahorrando" + " " + "AR$"+(descuento1Importe(precio1,descuento1)+descuento2Importe(precio2,descuento2)));
    
    
    let otraConsulta = prompt("¿Desea consultar otros productos? Escriba 'S' y Enter o Aceptar para continuar o culaquier tecla para cerrar")   
    
} else {
    alert("Muchas gracias por utilizar nuestro servicio. ¡Que tenga un lindo día!")
    }