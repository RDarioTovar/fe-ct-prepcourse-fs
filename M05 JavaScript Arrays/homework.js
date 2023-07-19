/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = [];

    for( var i = 0; i < array.length; i++) {
        nuevoArray.push(array[i]+1);
    } return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
 
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   var stringsConcatenados = palabras.join(' ')
   return stringsConcatenados;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

    var incluyeElemento = array.includes(elemento);
    return incluyeElemento;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumaNumeros = 0;
    
    for(var i = 0; i < arrayOfNums.length; i++) {
        sumaNumeros = sumaNumeros + arrayOfNums[i];        
    } return sumaNumeros;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var sumaResultados = 0;

   for(i = 0; i <resultadosTest.length; i++) {
      sumaResultados = sumaResultados + resultadosTest[i];
   }
   return sumaResultados / i;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   var numeroMayor = 0;

    for(var i = 0; i < arrayOfNums.length; i++ ) {
        if(arrayOfNums[i] > numeroMayor) {
            numeroMayor = arrayOfNums[i];
        }
    }
    return numeroMayor;

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   var multiplicador = 1;

   if( arguments.length === 0) {
       return 0;
   } else if(arguments.length === 1) {
       return arguments[0];
   } else {
       for(var i = 0; i < arguments.length; i++) {
           multiplicador = arguments[i] * multiplicador;
       }
   }
   return multiplicador;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var elementosCumplen = [];

    for( var i = 0; i < array.length; i++) {
        if(array[i] > 18) {
            elementosCumplen.push(array[i]);
        }
    } return elementosCumplen.length; 
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
          return 'Es fin de semana'
          break;
      case 2:
          return 'Es dia laboral'
          break;
      case 3:
          return 'Es dia laboral'
          break;
      case 4:
          return 'Es dia laboral'
          break;
      case 5:
          return 'Es dia laboral'
          break;  
      case 6:
          return 'Es dia laboral'
          break;
      case 7:
          return 'Es fin de semana'
          break;            
      default: return 'Introduce un numero correcto'
          break;
     }  
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numToString = num.toString();
   if(numToString[0] === '9') {
      return true  
   } else {
      return false
   }
  
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   if (array.every( e => array[0] === e)) {
      return true;
  } else {
      return false;
  }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var nuevoArreglo = [];
 
   for( var i = 0; i < array.length; i++ ) {
       if(array[i] === 'Enero' ) {
           nuevoArreglo.push(array[i]);

       } else if(array[i] === 'Marzo') {
         nuevoArreglo.push(array[i]);

       } else if(array[i] === 'Noviembre') {
         nuevoArreglo.push(array[i]);
       }
   }

   if(nuevoArreglo.includes('Enero') && nuevoArreglo.includes('Marzo') && nuevoArreglo.includes('Noviembre')) {
       return nuevoArreglo;
   } else {
       return 'No se encontraron los meses pedidos'
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var incremento = [];

    for( var i = 0; i < 11; i++) {
        incremento.push(i*6)
    } return incremento;
   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var mayoresCien = [];

    for(var i = 0; i < array.length; i++) {
        if(array[i] > 100) {
            mayoresCien.push(array[i])
        }
    } return mayoresCien 

   
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var sumandoDos =[];
   var incremento = num

   for( var i = 0; i < 10; i++) {
       incremento = incremento + 2;
       if(incremento === 10) {
           break;
       } else (
           sumandoDos.push(incremento)
       )
   }
   if(sumandoDos.length < 10) {
       return 'Se interrumpió la ejecución';
   } else if(sumandoDos.length === 10) {
       return sumandoDos;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var nuevoArray = [];
   var incremento = num;

   for( var i = 0; i < 10; i++) {
       if(i === 5) {
           continue;
       } else {
           incremento = incremento + 2;
           nuevoArray.push(incremento);
       }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
