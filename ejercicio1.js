//Homero
/*let nombreHomero = "Homero";
let apellidoHomero = "Simpson";
let edadHomero = 42;

console.log(nombreHomero);
console.log(apellidoHomero);
console.log(edadHomero);*/

// Ciudades
/*const laTordilla = "La Tordilla";
const Arroyito = "Arroyito";
const sanFrancisco = "San Francisco";
const Cordoba = "Córdoba";
const villaMaria = "Villa María";

console.log(nombreHomero + " " + "tiene" + " " + edadHomero + " " + "años" + " " + "y" + " " + "vive" + " " + "en" + " " + laTordilla)

alert(nombreHomero + " " + "tiene" + " " + edadHomero + " " + "años" + " " + "y" + " " + "vive" + " " + "en" + " " + laTordilla)*/

// Carnet
/*const codigoLicencia = "B47U89RE243";
let nombreBart = "Bart Simpson";
let domicilioBart = "742 Evergreen";
let domicilioCiudad = "Springfield";
let domicilioPais = "USA";
let cumpleBart = "02-11-70";
let sexoBart = "M";
let alturaBart = "4.0"
let pesoBart = "85"

let carnet = "Código: "+codigoLicencia+" "+
            "Nombre: "+nombreBart+" "+
            "Domicilio: "+domicilioBart+" "+
            "Ciudad: "+domicilioCiudad+" "+
            "Nacimiento: "+cumpleBart;

alert(carnet);
console.log(carnet);*/

// Registro de personas
/*let Madre = prompt("Ingrese el nombre de su madre");
let Padre = prompt("Ingrese el nombre de su padre");
let Abuelo = prompt("Ingrese el nombre de su abuelo");
let Abuela = prompt("Ingrese el nombre de su abuela");
let Madrina = prompt("Ingrese el nombre de su madrina");

let familia = "Madre: "+Madre+" "+
            "Padre: "+Padre+" "+
            "Abuelo: "+Abuelo+" "+
            "Abuela: "+Abuela+" "+
            "Madrina: "+Madrina;

console.log(familia);

alert(familia);*/


//Descuentos
/*let precio1 = prompt("Ingrese el precio del producto para conocer el precio con descuento");
let precio2 = prompt("Ingrese el precio del segundo producto para conocer el precio con descuento");

let precio1Oferta = ((precio1)-(precio1*0.20));
let precio2Oferta = ((precio2)-(precio2*0.3));

alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(precio1Oferta+precio2Oferta));
alert("Está ahorrando" + " " + "AR$"+((precio1*0.2)+(precio2*0.3)));



/*for (let i = 11; i <= 50; i++) {
   console.log(i)
}*/

/*let userNumber = parseInt(prompt("Ingrese un número"))

for (let i = 0; i <= userNumber; i++) {
    if (i % 2 == 0) {
        console.log("Número ", i);
    }
}*/


let ingresarNumero = parseInt(prompt("Ingrese un número"));

for (let i = 1; i <=10; i++) {
    let resultado = ingresarNumero + i;

    alert(ingresarNumero +" + "+ i +" = "+ resultado);    
}