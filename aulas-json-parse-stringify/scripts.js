const fs = require('fs/promises');

(async function () {
    const arquivojson = await fs.readFile('teste.json');

    //JSON.parse coloca de json para javascript
    const pessoas = JSON.parse(arquivojson)
    pessoas.push({
        nome: "guido",
        idade: 31
    });

    //JSON.stringify coloca de javascript para JSON
    const arayJSOn = JSON.stringify(pessoas)
    console.log(arayJSOn)
})();