var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
function printPlane(plane) {
    return plane.model + "(" + plane.npassengers + ")";
}
console.log("123Z" + printPlane(myHangar["123Z"]));
console.log("H789" + printPlane(myHangar["H789"]));
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
