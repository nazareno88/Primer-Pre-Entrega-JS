alert("Hola, somos Transporte Pereyra");

function saludar(){
    let nombre=prompt("Ingrese su nombre")
    alert("Bienvenido "+ nombre)
    return saludar
};

let saludo = saludar();



alert ("Somos transporte pereyra, y somos una empresa de servicios y mudanzas. Ofrecemos fletes y demas servicios con nuestras 3 clases de vehiculo. Peugueot Partner, Ford F100 y Camion");

let vehiculo = prompt("Ingrese sobre que vehiculo le gustaria obtner informacion, Partner, Ford F100 o Camion");

if(vehiculo=="Partner"|| "PARTNER"|| "partner"){
    
    alert("El valor por hora de la partner es de 9.900, carga hasta 500kg, una vez pasado los 40km se cobra por km, su valor es de 990");
}
else if(vehiculo=="Ford F100"||"ford f100"|| "FORD F100"){
    alert("El valor de la hora de la Ford F100, es de 15.000,carga hasta 1200kg, una vez pasado los 40km, se cobra por km, su valor es de 1500");
}   
else if(vehiculo=="Camion"||"CAMION"||"camion"){
    alert("El valor de la hora del camion, es de 18.700, carga hasta 3500kg ,una vez pasado los 40km, se cobra por km, su valor es de 1870");
} 
else{
    alert("No ha introducido ningun vehiculo");
}

let tipoDeCobro= Number(prompt("Ingrese 1 si su viaje tiene menos de 40km, de lo contrario ingrese 2"));
let valor = Number (prompt("Ingrese km o horas"));
let carga = Number(prompt("Ingrese 500 si necesita la partner, ingrese 1200 si necesita la f100 o 3500 si necesita el camion"));
const valorP=9900;
const valorF=15000;
const valorC =18700;
const kmP =990;
const kmF =1500;
const kmC=1870;

if(tipoDeCobro===1 && carga===500){
    alert("el valor de su viaje es de "+valorP*valor);
}
else if(tipoDeCobro===2 && carga===500){
    alert("el valor de su viaje es de "+ kmP*valor);
}
else if(tipoDeCobro===1 && carga===1200){
    alert("el valor de su viaje es de "+valorF*valor);
}
else if(tipoDeCobro===2 && carga===1200){
    alert("el valor de su viaje es de "+kmF*valor);
}
else if(tipoDeCobro===1 && carga===3500){
    alert("el valor de su viaje es de "+valorC*valor);
}
else if(tipoDeCobro===2 && carga===3500){
    alert("el valor de su viaje es de "+kmC*distancia);
}
else{
    alert("Los datos ingresados son incorrectos");
};

for (let i = 0; i<3500; i++){
    console.log(i);
    if(i===500){
       console.log("Peso de carga de la Partner ") ;
       continue
        
    }
    if(i===1200){
          console.log("Peso de carga de la Ford f100") ;
          continue
  
    
    }
    if(i===3499){
        console.log("Peso de carga del camion");
        
    }
}

let servicio =Number(prompt("Ingrese 1, si necesita que en su viaje se incluya un peon, ingrese 2, si hay que subir algo por soga, ingrese 3, si solciita ambos servicios y por ulitmo, ingrese 0 si es solo traslado"));

if(servicio===1){
    alert("El valor por hora del peon es de 4200 pesos");
}
else if(servicio===2){
    alert("El valor de subida con soga es de 5000 pesos por piso");
    let pisos = Number(prompt("Ingrese cantidad de pisos"));
    function cuenta(pisos,num2){
        let resultado = pisos*num2
        alert("El valor de la subida por soga es de "+ resultado)
    };
    cuenta(pisos,5000);
}
else if (servicio===3){
    alert("Los valores de los servicios son: 4200 pesos la hora del peon y 5000 pesos la subida con soga, al finalizar el viaje se hara un recuento de los pisos como de las horas y se agregara al valor final");
}
else{
    alert("Solo traslado");
}





