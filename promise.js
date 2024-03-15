// Promesa
// findAll()
const promise = new Promise( ( resolve, reject ) =>{
    setTimeout(() =>{
        if( false ){
            resolve('Promesa resuelta')
        }else{
            reject('Promesa rechazada')
        }
    }, 1000)
} );


// then | catch

// console.log(promise)

const resultado = promise
                    .then(( resp ) => resp)
                    .then((resp2) =>  console.log(`Respuesta 2: ${resp2}`))
                    .catch( (err) => console.log(err) );

                    
console.log('----------------Estoy al ultimo en el codigo----------------')




// console.log('Primer console.log------' ,
//                 resultado.then(( respuesta) => console.log('Resultado de la promesa: ', respuesta)))


/**
 * Promesa: Estados:
 * - Pendiente
 * - Resuelta
 * - Rechazada
 */