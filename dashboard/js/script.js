
//document.getElementById('btn').onsubmit

function send() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    document.getElementById('respuesta').innerHTML = email + ' ' + name;
}

function testAge() {
    const age = document.getElementById('edad').value;

    if (age >= 18) {
        document.getElementById('respuestaAge').innerHTML = '<p class="text-bold">Es mayor </p>'
    } else {
        document.getElementById('respuestaAge').innerHTML = '<p class="text-bold">Es menor</p>'
    }
}

function datos() {
    return [
        {marca: 'Audi', color: 'verde', modelo: 2001},
        {marca: 'Ford', color: 'amarillo', modelo: 2013},
        {marca: 'Mercedes', color: 'gris', modelo: 2008},
        {marca: 'Mazda', color: 'azul', modelo: 2015},
        {marca: 'Toyota', color: 'rojo', modelo: 2010},
        {marca: 'Ford', color: 'gris', modelo: 2000},
        {marca: 'Mazda', color: 'gris', modelo: 2009},
        {marca: 'Tesla', color: 'amarillo', modelo: 2004},
        {marca: 'Mercedes', color: 'amarillo', modelo: 2005},
        {marca: 'Nissan', color: 'verde', modelo: 2012}
    ];
}

const carros = [
    {marca: 'Audi', color: 'verde', modelo: 2001},
    {marca: 'Ford', color: 'amarillo', modelo: 2013},
    {marca: 'Mercedes', color: 'gris', modelo: 2008},
    {marca: 'Mercedes', color: 'gris', modelo: 2010},
    {marca: 'Mazda', color: 'azul', modelo: 2015},
    {marca: 'Toyota', color: 'rojo', modelo: 2010},
    {marca: 'Ford', color: 'gris', modelo: 2000},
    {marca: 'Mazda', color: 'gris', modelo: 2009},
    {marca: 'Tesla', color: 'amarillo', modelo: 2004},
    {marca: 'Mercedes', color: 'amarillo', modelo: 2005},
    {marca: 'Nissan', color: 'verde', modelo: 2012}
];

const filtrar = carros.filter(obj => obj.marca === 'Mercedes' && obj.color === 'gris');
console.log('filtrar -->', filtrar);

const filtrarSumar = carros.filter(obj => obj.marca === 'Mercedes' && obj.color === 'gris').reduce((a, c) => a + c.modelo, 0);

const mediaModelo = filtrarSumar / filtrar.length;
console.log('mediaModelo --->', mediaModelo);

console.log('filtrarSumar -->', filtrarSumar);



// Sumar
const sumar = carros.reduce((a, c) => a + c.modelo, 0);



const sort = carros.sort(( a, b ) => {
    if (a.marca < b.marca){
      return -1;
    }
    if ( a.marca > b.marca ){
      return 1;
    }
    return 0;
  });

const encuentra = carros.find(obj => obj.marca === 'Mercedes');

  //console.log('encuentra --->', encuentra);


const cuentosHay = carros.filter(val => val.marca === 'Mercedes').length;
//console.log('cuentosHay --->', cuentosHay);


const map = carros.map(obj => {
    if (obj.color === 'verde') {
        obj.color = 'VERDE';
    }
    return obj;
});

/*
const every = carros.every(obj => {
    console.log('obj --->', obj)
    return obj.modelo < 2000
});
*/

const concat = carros.concat( {marca: 'Tesla 2', color: 'amarillo', modelo: 2005});

//console.log('concat -->', concat);

const push = carros.push( {marca: 'Tesla 3', color: 'amarillo', modelo: 2006});
// console.log('push --->', push);
// console.log('carros -->', carros);


const array1 = [1, 2, 3, 4, 5];
//console.log(array1.fill(0, 3, 5));


const longitud = carros.length;

const fill = carros.fill({marca: 'Audi', color: 'verde', modelo: 2023}, 6, longitud - (longitud - 7));
//console.log('carros -->', carros);

//console.log('map --->', map);
//console.log('sort --->', sort);
//console.log(filtrar);
//console.log('sumar -->', sumar);