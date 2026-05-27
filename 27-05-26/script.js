// let precio = [12, 22, 45, 85, 128, 99, 190, 280];
// const iva = precio.map(precio => {
// return precio * 1.21;
// });
// console.log(precio);

// console.log(iva);

// const menosiva = iva.map( precio => {
// return precio * 0.817;
// })
// console.log(menosiva)

const productos =[ { nombre: 'laptop', precio: 1000, stock: 3},
                   { nombre: 'mouse', precio: 20, stock: 300},
                   { nombre: 'teclado', precio: 80, stock: 3000}
];
console.log(productos)

const caros = productos.filter(index =>
    index.precio >= 50
);
const pocostock = productos.filter(index =>
    index.stock <= 10
);

console.log(caros);
console.log(pocostock);

productos[0].precio = 2000;

console.log(productos);