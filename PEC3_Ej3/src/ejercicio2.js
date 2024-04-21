var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
//Muestra por consola la clave, el modelo de avión y el número de pasajeros
for (var key in myHangar) {
    console.log("".concat(key, ":").concat(myHangar[key].model, "(").concat(myHangar[key].npassengers, ")"));
}
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
