const fspromisses = require('fs/promises');
const fs = require('fs');

console.log('antes de ler');

const a = fspromisses.readFile('a.txt');

a.then((data) => {
    console.log(data.toString())
});

a.catch((erro) => {
    console.log(erro);
});
//função anonima
(async function () {
    const a = await fspromisses.readFile('a.txt');

    console.log(a.toString())
})();

console.log('depois de ler')