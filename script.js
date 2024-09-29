//Ejercicio 11
//Declaración de variables 
let categoriaProducto

//Menu de inicio, con mensaje de error si se selecciona una categoría no Válida
do {
    categoriaProducto = Number(
        prompt(
            "Digite el numero correspondiente a la categoría del producto a resgistrar:\n 1.Electrónicos\n 2.Ropa\n 3.Alimentos\n 4.Medicamentos"
        )
    );

    if (
        isNaN(categoriaProducto) ||
        categoriaProducto > 4 ||
        categoriaProducto < 1
    ) {
        //Mensaje de error que se muestra al usuario 
        alert("ERROR,Categoría de producto inválido, intente nuevamente")
        //Mensaje de error que se muestra en la consola
        console.error( "ERROR,Categoría de producto inválido, intente nuevamente")
    }
} while (
    isNaN(categoriaProducto) ||
    categoriaProducto > 4 ||
    categoriaProducto < 1
);

//Declaración de variables 
//let precioProducto = Number(prompt("Ingrese el precio del producto de la categoría seleccionada: "));
let precioProducto
//Mensaje de error si se ingresa un dato en un formato no Válido en el campo del precio del producto
do {
    precioProducto = Number(
        prompt(
            "Ingrese el precio del producto de la categoría seleccionada: "
        )
    );

    if (
        isNaN(precioProducto) ||
        precioProducto < 0
    ) {
        //Mensaje de error que se muestra al usuario 
        alert("ERROR, precio de producto inválido, intente nuevamente")
        //Mensaje de error que se muestra en la consola
        console.error( "ERROR, precio de producto inválido, intente nuevamente")
    }
} while (
    isNaN(precioProducto) ||
    precioProducto < 0
);

//Declaración de variables para el cálculo del precio final con el iva
let iva

//Calculo del iva
switch (categoriaProducto) {
    case 1: {
        iva = 0.19 * precioProducto
        categoriaProducto="Electrónicos"
        break;
    }

    case 2: {
        iva = 0.12 * precioProducto
        categoriaProducto= "Ropa"
        break;
    }

    case 3: {
        iva = 0.05 * precioProducto
        categoriaProducto="Alimentos"
        break;
    }

    case 4: {
        iva = 0
        categoriaProducto="Medicamentos"
        break;
    }

    default:
        alert("ERROR, intente nuevamente")
        console.log("ERROR, intente nuevamente")
        break; 
}

//Declaración y cálculo del precio final
let precioFinal = precioProducto + iva;

//Mensaje que muestra al usuario el precio final con el IVA agregado para la categoría de producto seleccionada
alert(
    "El valor del IVA para el producto de la categoría " +
    categoriaProducto +
    " es: $" +
    iva +
    ", por lo que el precio final es de: $" +
    precioFinal
);

// Mensaje en la consola que muestra el precio final con el IVA agregado para la categoría de producto seleccionada
console.log( "El valor del IVA para el producto de la categoría " +
    categoriaProducto +
    " es: $" +
    iva +
    ", por lo que el precio final es de: $" +
    precioFinal)