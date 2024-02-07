const fs = require('fs');

console.log('antes de ler');

//leitura de um aquivo sincrono
const a = fs.readFileSync('a.txt').toString();
console.log(a);

//leitura assincrona
fs.readFile('a.txt', (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString)
    }
});

console.log('depois de ler')

