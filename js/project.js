//Este es un proyecto para app web de restaurante para que el cajero del local ingrese los montos de los platos que consumen y hagan la factura teniendo en cuenta el total de precios, el total con iva, y diferentes descuentos y recargos dependiendo del medio de pago

//Si abona con debito, efectivo o mercadopago tiene un 10% de descuento
function descuento(entrada, platoPrincipal, postre, bebida,medioPago){
    let total = entrada + platoPrincipal + postre + bebida 
    let iva = total * 0.21
    let totalIva = total + iva
    let descuento = totalIva * 0.10
    let precioFinal = totalIva - descuento
    alert(`Abonando en Efectivo/Débito/MercadoPago (en 1 pago), obtiene un 10% de descuento.\nSuma total de precios: $${total}\n-------------\nTotal con IVA (21%): $${totalIva}\n-------------\nDescuento del 10% por Efectivo/Débito/MercadoPago: $${descuento}\n-------------\nPrecio Final: $${precioFinal}`)
}

//si abona con tarjeta de credito, tiene un 5% de recargo
function recargo(entrada, platoPrincipal, postre, bebida, medioPago){
    let total = entrada + platoPrincipal + postre + bebida 
    let iva = total * 0.21
    let totalIva = total + iva
    let recargo = totalIva * 0.05
    let precioFinal2 = totalIva + recargo
    alert(`Abonando con Tarjeta de Crédito, en 1 pago o hasta en 12 cuotas, se realiza un 5% de recargo.\n Suma total de precios: $${total}\n-------------\nTotal con IVA (21%): $${totalIva}\n-------------\nRecargo de Tarjeta de Crédito: $${recargo}\n-------------\nPrecio Final: $${precioFinal2}`)
}



//VARIABLE
let comanda = confirm("Bienvenido/a, gracias por utilizar nuestro nuevo sistema de facturación. A continuación podrá completar los datos para realizar la factura. Si desea continuar, agregue los precios sin el signo $")

//APLICACION
if(comanda == true){    
    let mesa = parseInt(prompt("Ingrese el Nº de la mesa que desea facturar: "))
    let entrada = parseInt(prompt("Ingrese el monto del plato de ENTRADA: "))
    let platoPrincipal = parseInt(prompt("Ingrese el monto del PLATO PRINCIPAL: "))
    let postre = parseInt(prompt("Ingrese el monto del POSTRE: "))
    let bebida = parseInt(prompt("Ingrese el monto de la BEBIDA: "))
    let medioPago = prompt("Ingrese el medio de pago (Efectivo/Débito/Crédito/MercadoPago): ")
    
    comanda = confirm(`Para finalizar su facturación, para la mesa Nº: ${mesa} ud ingresó:\nEntrada: $${entrada}\nPlato Principal: $${platoPrincipal}\nPostre: $${postre}\nBebida: $${bebida}\nMedio de PAGO: ${medioPago}\nDesea confirmar este pedido? `)

    while(medioPago.toLowerCase() == "efectivo", "debito", "mercadopago", "credito"){
        switch(medioPago){
            case "efectivo":
                descuento(entrada, platoPrincipal, postre, bebida,medioPago);
                break;
            case "debito":
                descuento(entrada, platoPrincipal, postre, bebida,medioPago);
                break;
            case "mercadopago":
                descuento(entrada, platoPrincipal, postre, bebida,medioPago);
                break;
            case "credito":
                recargo(entrada, platoPrincipal, postre, bebida, medioPago);
                break; 
            default:
                alert("El medio de pago es incorrecto. Por favor actualice la página e ingrese sus datos nuevamente.")
                break
                                             
        }
        alert("MUCHAS GRACIAS")
        break;
    }
}
    
                                  
             
