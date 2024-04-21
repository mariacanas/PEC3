
interface Plane{
    model:string,
    npassengers:number
}

//Se define un tipo de datos que será  objeto con la clave de cadena de texto
    //y los valores so objetos de interfaz Plane
interface HangarHash{
    [key: string]: Plane
}

let myHangar:HangarHash = {}

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

//Muestra por consola la clave, el modelo de avión y el número de pasajeros
for(let key in myHangar){
    console.log(`${key}:${myHangar[key].model}(${myHangar[key].npassengers})`);
}
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
