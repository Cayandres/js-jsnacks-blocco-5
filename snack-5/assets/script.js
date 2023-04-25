/*SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
const bikeList = [
    {
        name : 'Graziella',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        name : 'Offroad',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        name : 'Downhill',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        name : 'city',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        name : 'Downhill',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        name : 'Cross',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        name : 'Bmx',
        weight : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
]

console.log(listaBici);

const lightestBike = bikeList.reduce(function(a, b) {
    if (a.weight < b.weight) {
        return a
    }
    return b
})
console.log(lightestBike)


const {name,weight} = lightestBike

console.log(`la bici più leggera è la ${name} con i suoi ${weight} kg.`);



const getRandomNumbers = (min,max) => Math.random()* (max - min + 1) + min;


