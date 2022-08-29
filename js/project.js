//Este es un proyecto de aplicacion de restaurante para que el cajero del local ingrese los montos de los platos que consumen y haga la factura. Ahi mismo la app suma el total, luego aplica el iva del 21%.

//FUNCION
function total(entrada, platoPrincipal, postre, bebida) {
   let total = entrada + platoPrincipal + postre + bebida 
   let iva = total * 0.21
   let totalIva = total + iva   
   confirm(`El total a pagar es: $${total}\n=================\nEl importe del IVA es $${iva}\n=================\nEl total final es $${totalIva}.\n=================\nMuchas gracias por utilizar nuestro sistema`)   
}

//VARIABLE
let comanda = confirm("Bienvenido/a, gracias por utilizar nuestro nuevo sistema de facturación. A continuación podrá completar los datos para realizar la factura. Si desea continuar, agregue los precios sin el signo $")

//APLICACION
while(comanda == true){    
    let mesa = parseInt(prompt("Ingrese el Nº de la mesa que desea facturar: "))
    let entrada = parseInt(prompt("Ingrese el monto del plato de ENTRADA: "))
    let platoPrincipal = parseInt(prompt("Ingrese el monto del PLATO PRINCIPAL: "))
    let postre = parseInt(prompt("Ingrese el monto del POSTRE: "))
    let bebida = parseInt(prompt("Ingrese el monto de la BEBIDA: "))
    let medioPago = prompt("Ingrese el medio de pago (Efectivo/Débito/Crédito/MercadoPago/Otro): ")
    

    comanda = confirm(`Para finalizar su facturación, para la mesa Nº: ${mesa} ud ingresó:\nEntrada: $${entrada}\nPlato Principal: $${platoPrincipal}\nPostre: $${postre}\nBebida: $${bebida}\nMedio de PAGO: ${medioPago}\nDesea confirmar este pedido? `)

    if(comanda == true){
        total(entrada, platoPrincipal, postre, bebida)                           
    } 
}