
const inflacion = 6
let hayCuotas

alert("Bienvenido a la calculadora que te ayuda a ganarle a la inflación")

let monto = Number(prompt("Ingresar monto de compra"));

while (monto < 0 || isNaN(monto)){
    monto = Number(prompt("Ingresar monto de compra"));
}

console.log("El monto de lo querés comprar es $" + monto);

let hayDescEfect = confirm("¿Te ofrecen descuento en efectivo/transferencia?")
function calcularTransferencia (){
    return efectivoFinal = monto * ((100 - interesEfectivo) / 100 )
}
function calcularCuotaTotal(){
    return cuotaTotal = monto * (1 + (interes/100))
}
function calcularCuota(){
    return cuotaPura = cuotaTotal / cuotas
}
if (hayDescEfect){
    interesEfectivo = Number(prompt("Ingresar el porcentaje del descuento en efectivo"));
    if(inflacion < interesEfectivo){
    calcularTransferencia();
    console.log("Te beneficias pagando en efectivo. Te saldría $" + efectivoFinal)
    }
    else{
        console.log("Mejor pagá con tarjeta")
    }
}
let hayTarjeta = confirm("¿Te ofrecen pagar con tarjeta?")
if (hayTarjeta){
    cuotas = Number(prompt("Ingresá las cuotas que te ofrecen"))
    interes = Number(prompt("Ingresá el interes que te cobran"))
    if(interes/cuotas < inflacion){
        
        console.log("Te conviene pagar con tarjeta, terminás pagando $" + Math.round(calcularCuotaTotal()) + ", pero le estás ganando a la inflación")
        console.log("Y cada cuota va a ser de $" + Math.round(calcularCuota()))
    }
    else {
        console.log("La tarjeta no es una buena opción")
    }
}

