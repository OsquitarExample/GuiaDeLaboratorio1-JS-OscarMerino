/**Variable Boton */
let botonCalcular = document.getElementById("btnCalcular")

/**Agregar evento al boton Calcular Importe */
botonCalcular.addEventListener("click", calcularImporte);

function calcularImporte(){
    /*Obtener valores del input ID*/
    let idProducto = parseInt(document.getElementById("IdProducto").value);
    let precioProducto;
    /*De acuerdo al valor de ID se cobra un precio*/
    if(idProducto === 1){
        precioProducto = 70.99;
    }
    else if(idProducto === 2) {
        precioProducto=78.99;
    }
    else if(idProducto === 3) {
        precioProducto=100.99;
    }
    else if(idProducto === 4) {
        precioProducto=58.50;
    }
    else if(idProducto === 5) {
        precioProducto=35.00;
    } else {
        alert("Ingrese un código válido")
    };

    /**Obtener valores del inpur Cantidad */
    let cantidadProducto = parseInt(document.getElementById("cantidadProducto").value);
    /*Aplicando el descuento dependiendo de la cantidad*/
    let decDescuento
    if(cantidadProducto < 10){
        decDescuento = 0.035;
    } else if (cantidadProducto >=10 && cantidadProducto <= 20 ){
        decDescuento = 0.07;
    } else if (cantidadProducto > 20){
        decDescuento = 0.095;
    } else {
        alert("Ingrese la cantidad que quiere comprar")
    }

    /*Imprimiendo el importe Total*/
    let descuentoTotal = (precioProducto*cantidadProducto)*decDescuento
    document.getElementById("importeTotal").innerHTML = ("<p>El Precio Unitario es: s/" + precioProducto + "<p>")
    document.getElementById("importeTotal2").innerHTML =("<p>El Precio por la cantidad que eligió es: s/" + cantidadProducto*precioProducto + "<p>")
    /**tofixd(2): Utilizado para reducir la cantidad de decimales a 2 */
    document.getElementById("importeTotal3").innerHTML =("<p> El Descuento es de: s/" + descuentoTotal.toFixed(2) + "<p>")
    document.getElementById("importeTotal4").innerHTML =("<p>Total a Pagar: s/" + ((precioProducto*cantidadProducto) - descuentoTotal).toFixed(2) + "<p>" )
    document.getElementById("comprarYA").innerHTML = ("<button> Comprar </button>")
    document.getElementById("importeTotal5").innerHTML =("<b> ¡OFERTON! <b>")
    
}

//let descuentoTotal = (precioProducto*cantidadProducto)*decDescuento
  //  document.write("<p>El Precio Unitario es " + precioProducto + "<p>")
    //document.write("<p>El Precio por la cantidad que eligió es " + cantidadProducto + "<p>")
    //document.write("<p> El Precio Descuento es " + decDescuento + "<p>")
    //document.write("<p>Total a Pagar " + ((precioProducto*cantidadProducto) - decDescuento) + "<p>" )