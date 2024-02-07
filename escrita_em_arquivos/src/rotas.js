const express = require('express');
const fs = require('fs/promises');


const rotas = express();

rotas.get('/', async (req, res) => {
    const texto = 'ola'
    await fs.writeFile('./src/a.txt', texto)//se colocar um arquivo que n existe para ele mandar...ele msmo cria este arquivo
    res.json('ok');//exemplo é colocando um aquivo "b.txt"
})

rotas.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    const teste = await fs.readFile('./src/usuarios.json');

    const pessoas = JSON.parse(teste)
    pessoas.push({ nome, idade });

    const pessoasStringify = JSON.stringify(pessoas);

    await fs.writeFile('./src/usuarios.json', pessoasStringify);
    return res.json('pessoa cadastrada com sucesso')
});

//metodo com try e catch

rotas.post('/', async (req, res) => {
    const { nome, idade } = req.body;
    try {
        const teste = await fs.readFile('./src/usuarios.json');

        const pessoas = JSON.parse(teste)
        pessoas.push({ nome, idade });

        const pessoasStringify = JSON.stringify(pessoas);

        await fs.writeFile('./src/usuarios.json', pessoasStringify);
        return res.json('pessoa cadastrada com sucesso')
    } catch (erro) {
        return res.json(`Deu erro ${erro.mensage}`)
    } finally {
        console.log('mensagem que sempre sera exibida')
    }

});

module.exports = rotas