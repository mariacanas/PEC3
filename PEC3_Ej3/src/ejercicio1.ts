

function printArray(array:Array<number>):void{
	//code to print the array on console
       /***/
       //Imprime los elementos del array por consola
       console.log(array.join(',')); 
}

let array:number[]=[2,3,4];
console.log(array.shift()); //2 -> Utiliza el método shift() que elimina
       //el primer elemento del array y nos lo muestra por consola
printArray(array); // 3,4
array.push(5); //Añade el número 5 al final de nuestro array
printArray(array); // 3,4,5
console.log(array[array.length-1]); //5 //Muestra por consola el elemento que está situado
       //en la última posición del array
array.pop(); //El metodo pop elimina el último elemeto del array
printArray(array); // 3,4
array.push(1); //El método push añade al final del array el valor 1
printArray(array); // 3,4,1
array.unshift(8); //El método unshift añade el 8 al principio de nuestro array
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let everyisgreater = array.every(n => n > 3); //Devuelve true o false, en función de si todos
       //los numeros del array son mayores a 3
console.log(everyisgreater);  //false 
/** check if every number is less than 10 */
let everyisless = array.every(n => n < 10); //Devuelve true o false, en función de si todos los valores del
       //array son menores a 10
console.log(everyisless);  //true
console.log(array.sort().join(',')); //1,3,4,8 //Ordena el array de menor a mayor
console.log(array.sort().reverse().join(',')); //8,4,3,1 //Ordena el array por los elementos de mayor a menor
