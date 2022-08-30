// El objetivo del algoritmo es:
// 1. Clasificar a los usuarios en Administrador o Cliente
// 2. En función del tipo de usuario, se habilitan ciertas operaciones posibles. Los Administradores pueden modificar y/o crear, mientras que los Clientes solo pueden consultar.

let tipoUsuario = prompt("Bienvenido! Ingresa la letra A mayúscula si eres Administrador o la letra C mayúscula si eres Cliente");



if (tipoUsuario == "A") {
    alert("¡Hola Adminisrador! A continuación, selecciona el número correspondiente a la acción que deseas realizar");
        
    let accionesAdmin = prompt("1 Buscar Producto, 2 Buscar Marca, 3 Agregar Producto, 4 Agregar Marca");

    if (accionesAdmin == 1) {
        
    } else {
        if (accionesAdmin == 2) {
            
            const marcas = ["Samsung", "Philips", "Noblex", "Dell", "Lenovo", "Longvie"];
            
            let marca = prompt("Ingrese la marca que desea buscar");

            alert(marcas.includes(marca));

        } else {
            if (accionesAdmin == 3) {
                
                function Producto(categoria, marca, modelo, precio) {
                    this.categoria = categoria;
                    this.marca = marca;
                    this.modelo = modelo;
                    this.precio = precio;
                };

                let categoria1 = prompt("Ingresa categoria");
                let marca1 = prompt("Ingresa marca");
                let modelo1 = prompt("Ingresa modelo");
                let precio1 = prompt("Ingresa precio");
                
                const producto1 = new Producto(categoria1,marca1,modelo1,precio1);

                alert("El producto ingresado es " +producto1); //Este alert no funciona, la intención es que muestre las propiedades del objeto cargado

                console.log(producto1); //Por acá sí sale el objeto

                

            } else {
                if (accionesAdmin == 4) {
                    
                } else {
                    alert("Debes elegir la opción escribiedo un número entre 1 y 4. Por favor, inicia el proceso nuevamente.")
                    
                }
                
            }
            
        }
    
    } 
} else {
    if (tipoUsuario == "C") {
        alert("¡Hola Cliente! A continuación, selecciona el número correspondiente a la acción que deseas realizar")
    } else {
        alert("Las únicas selecciones posibles son A o C. Por favor, inicia nuevamente el proceso de validación")
    }
}