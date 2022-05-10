/*
Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor,
Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, 
Promise se rechazará con el valor generado.

Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y 
espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y 
devuelve el valor resuelto.

By: https://mzl.la/2wRdFUx
Resolver problema con Async/Await
⠀⠀
Ya conociendo Async/Await vamos a implementarlo en el desafío.

Creamos una función async con su estructura try()catch . 
Dentro de catch() pedimos que ejecuten tres peticiones. Para acceder a ellas colocamos 
la palabra reservada await y llamando nuestro fetchData indicamos dentro de sus parámetros 
la ruta que se debe tomar para acceder a la información que queremos imprimir en cada una de nuestras constantes.
⠀⠀
Después imprimimos los resultados. En catch() colocamos que código que queremos imprimir en 
caso de que no se cumpla la petición de try() . Ya por último llamamos la función anotherFunction() 
para ejecutarla.
*/
const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=> resolve('Do Somethung Async'),3000)
        : reject(new Error('Test Error')) 
    });
}

const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async() => {
    try {
            const something = await doSomethingAsync();
            console.log(something);
        } catch{
            error;
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');