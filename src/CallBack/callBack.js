

/*======  
Los callbacks son el nombre de una convención para usar funciones que llaman a otras en JavaScript. 
No hay una palabra reservada llamada “callback” en el lenguaje JavaScript que haga que nuestro código sea diferente o especial,
es mas una convención.
Tal es el caso que en lugar de llamar “callback” en el ejemplo de la clase, podemos llamarlo “suma” y funcionara igualmente.
La mayoría estamos acostumbrados a programar de manera sincrona, es decir le indicamos al código que
por ejemplo defina un Valor “X” y con otro valor “Y” y realizamos un calculo (Por ejemplo una multiplicación).

El problema radica en que por ejemplo si quisiéramos crear un programa que nos convierta nuestra moneda (pesos) 
a su equivalente en Bitcoin, podemos definir X (Valor de nuestro dinero) pero NO podemos definir de manera 
implícita “Y” (Precio del Bitcoin) por que es algo muy volátil. 
Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro programa realiza una multiplicación de X * 
Y sin embargo no tenemos Y (precio del bitcion) porque tenemos que esperar que el API nos conteste cual es este valor. 
Es ahí donde sirven los callback
.
Existen dos Metodos A y B
-El método B hace el calculo de nuestros Pesos * PrecioBitcoin
-El método A obtiene el precio del API de Bitcoin
Entonces el método B es llamado por el método A cuando por fin lee y obtiene el precio del Bitcoin, 
solo hasta entonces tiene sentido que multipliquemos nuestros valores.
======*/
function sum(num1,num2){
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1,num2 );
}

console.log(calc(6,6, sum));  //npm run callback

function date(callback){
    console.log(new Date);
    setTimeout(()=>{
        let date = new Date;
        callback(date)
    },3000); 
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate); //npm run callback