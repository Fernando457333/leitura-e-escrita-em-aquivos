//buffer é um espaço de memoria que armazena dados binarios que são
//representados por uma sequencia de numeros inteiros.
//  1  teste
//  2
//<buffer 74 65 73 74 65 0a>

// 74="t" / 65="e" / 73="s" / 74="t" / 65="e" / 0a="linha vazia(quebra de linha)"

const fspromisses = require('fs/promises');
const fs = require('fs');

console.log('antes de ler');

const a = fspromisses.readFile('a.txt');

(async function () {
    const a = await fspromisses.readFile('a.txt');

    console.log(a)
})();

console.log('depois de ler')
