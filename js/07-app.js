// Event loop o loop de eventos en JS

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise((resolve) => {
    resolve('Desconicido...')
}).then(console.log)

console.log('Ultimo');