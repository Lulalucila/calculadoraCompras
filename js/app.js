
const inflacion = 6
let hayCuotas
let monto;

alert("Bienvenido a la calculadora que te ayuda a ganarle a la inflación ya sea en nuestros locales o en uno nuevo")

do{
    monto = Number(prompt("Ingresar monto de lo que quieras comprar"));
} while (monto < 0 || isNaN(monto))

console.log("El monto de tu compra te recuerdo que es $" + monto);

let nuestrosLocales = confirm("¿Tu comrpa es en alguno de nuestros locales? Gorrion / Prune / XL / Benedetta")


if(nuestrosLocales){
let nuestroLocal = prompt("¿En que local te gustaría comprar? (recordá escribirlos tal cual  Gorrion - Prune -  XL - Benedetta ) ")


function mostrarLocal(locales){
    locales.forEach(local => {
        console.log(`El nombre del local es ${local.nombre}, ${local.tarjeta} acepta tarjeta de crédito, sus cuotas pueden ser ${local.cuotas}, la misma tiene un interes de ${local.interes}%. Y si pagás en efectivo tenes un descuento del ${local.interesEfectivo}% `) 
        
        let interesEfectivo = local.interesEfectivo
        let cuotas = local.cuotas
        let interes = local.interes
        let tarjeta = local.tarjeta

    if (interesEfectivo > 0){
        if(inflacion < interesEfectivo){
            efectivoFinal = monto * ((100 - interesEfectivo) / 100 )
        console.log("Te beneficias pagando en efectivo. Te saldría $" + efectivoFinal)
        }
        else{
            console.log("Mejor pagá con tarjeta")
        }
    }
    if (tarjeta == "SI"){
        if(interes/cuotas < inflacion){
            console.log("Te conviene pagar con tarjeta, terminás pagando $" + Math.round(monto * (1 + (interes/100))) + ", pero le estás ganando a la inflación")
            console.log("Y cada cuota va a ser de $" + Math.round(cuotaTotal / cuotas))
        }
        else {
            console.log("La tarjeta no es una buena opción")
        }
    } else{
        console.log("No acepta tarjeta, así que no es opción. Si o si Efectivo")
    }


    }
    
    );
    
}

function filtrarLocal(){
    const resultado =  locales.filter(filtrarNombre)
    if(resultado.length){
        mostrarLocal(resultado)
    }
    else{ 
        console.log("No coincide")
    }
}
function filtrarNombre(local){
    if(nuestroLocal){
        return local.nombre === nuestroLocal
    }      
}
filtrarLocal()



} else{


    let hayDescEfect = confirm(" En este nuevo local ¿Te ofrecen descuento en efectivo/transferencia?")
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
        interesEfectivo = Number(prompt("Cuanto es el descuento que te hacen por pagar en efectivo? (ej: 5)"));
        if(inflacion < interesEfectivo){
        calcularTransferencia();
        console.log("En este compra te beneficias pagando en efectivo. Te saldría $" + efectivoFinal)
        }
        else{
            console.log("Mejor pagá con tarjeta")
        }
    }
    let hayTarjeta = confirm("En el local, ¿Te ofrecen pagar con tarjeta?")
    if (hayTarjeta){
        cuotas = Number(prompt("Decinos cuantas cuotas que te ofrecen"))
        interes = Number(prompt("En el local, ¿ te hacen recargo por pagar con tarjeta? ¿Cuanto? (ej: 10) "))
        if(interes/cuotas < inflacion){
            
            console.log("Te conviene pagar con tarjeta, terminás pagando $" + Math.round(calcularCuotaTotal()) + ", pero le estás ganando a la inflación")
            console.log("Y cada cuota va a ser de $" + Math.round(calcularCuota()))
        }
        else {
            console.log("La tarjeta no es una buena opción")
        }
    }
    



}

