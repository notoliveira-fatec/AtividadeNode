import chalk from "chalk";
import fs from 'fs';

function extraiLinks(texto){
    const regex = /\[([^\])]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];

    let temp;
    while((temp = regex.exec(texto)) != null ){
        arrayResultado.push({[temp[1]] : [temp[2]]});
    }
   return(arrayResultado);
  
}

function trataErro(erro){ 
    throw new Error(chalk.red(erro.code,  "Não há arquivos no caminho...... "));
}


async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";

    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto)) 
    } catch(erro){
        trataErro(erro);
    }
}

pegaArquivo("./Arquivos/texto.md")

// async function pegaArquivo(caminhoDoArquivo){
//     const encoding = "utf-8";
//     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
//     console.log(chalk.blueBright(texto))
// }



//pegaArquivo('./Arquivos/texto.md');








  // const linksExtraidos = regex.exec(texto);
    // // const linksExtraidos = texto.match(regex);
    // console.log(linksExtraidos);


//comentario
















/*function pegaArquivo(caminhoDoArquivos){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivos, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));

    
    })
}*/



// function pegaArquivo(caminhoDoArquivo){
//     const encoding = "utf-8";

//     fs.promises    
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro))

// }