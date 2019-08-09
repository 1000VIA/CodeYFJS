const productsStock= require("./productsObj");
const productsList = require("./shoping-list");

const clients = require("./clients");

/**
 * Puedes crear las variables y funciones necesarias para que el sistema funcione.
 * Debe simular una compra en una tienda y arrojar el total de la compra teniendo en cuenta los siguientes descuentos:
 * León Ceballos: 5%
 * Cristian Vega: 10%
 * Jesse Cogollo: 2%
 **/

// const productsListIds = [34, 1, 9, 8, 23, 11, 40, 14, 6, 33, 29, 20, 41, 15, 5];
// const productsQuantities = [2, 5, 3, 9, 2, 4, 2, 3, 10, 8, 6, 12, 4, 5, 2, 7, 7];

/** 
 * Requerimientos:
 * 1: Dentro de la función principal deberás imprimir la lista de productos con la cantidad restante después de la compra.
 * 2: Imprimir el valor total sin aplicar el descuento. El número debe tener dos decimales.
 * 3: Imprimir el total del descuento aplicado.
 * 4: Si no hay suficientes productos se debe agregar a la lista de compra solo los que alcancen.
 **/

// TODO: Si crees que es necesesario incluye más funciones para las pequeñas tareas

// Funciones adicionales aquí...

// TODO: Función Principal getCostList
function getCostList(client, productsIds, quantities) {
    let compra = 0;
    productsListIds.forEach(function(element, index) {
        // console.log(products[element]);
        // console.log(quantity[element]);
        // console.log(costs[element]);
        // console.log(quantities[element]);
        let cantidadStock = quantity[element];
        let cantidadComprar = quantities[index]
        let costo = costs[element];
        let total = costs[element] * cantidadComprar;

        // console.log(total);

        if (cantidadStock >= cantidadComprar) {
            compra = compra + (total);
            cantidadStock = cantidadStock - cantidadComprar;
        } else {
            compra = compra + (costo * cantidadStock);
        }
        console.log('El valor de la compra es: ' + compra, 'y La cantidad que se encuentra en stock es: ' + cantidadStock);

    });

    if (client === 'Cristian Vega') {
        compra = compra - (compra * 0.10);
    } else if (client === 'León Ceballos') {
        compra = compra - (compra * 0.05);
    } else if (client === 'Jesse Cogollo') {
        compra = compra - (compra * 0.02);
    } else {
        compra = compra;
    }
    console.log('El total de la compra señor ' + client + ' es de: ' + compra.toFixed(2) + ' 🤗');
}

const result = getCostList(clients[0], productsList);

// Imprime el total de la compra
// console.log('El total de la compra es: ' + result)

/**
 * TE RECOMENDAMOS
 * 1. Primero recorre, suma y multiplica los productos de acuerdo a la cantidad
 * 2. Saca el descuento según el cliente
 * 3. Aplica el descuento  al total
 * 4. Al utilizar el console.log pon titulos a lo que imprimes
 */

/**
 * LISTA DE CHEQUEO
 * Calcular el total de la compra
 * Imprimir los productos con la  cantidad restante luego de la compra
 * Calcular el descuento
 * Imprimir el descuento
 * Aplicar descuento al total
 * Imprime el total
 */