/**************************************************************
*Objetivo: Manipular entrada e saída de dados para o usuário* 
* Data: 04/08/2023
* Autor: Igor
* Versão: 1.0
**************************************************************/

// import da biblioteda da entrada de dados via teclado 
var readline = require('readline')

// Criando um objeto entradaDeDados para ser uma referencia da biblioteca READLINE 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função de CallBack que permite apresentar uma mensagem no terminal, e captar a digitação do 
// usuário
// Obs: O dado digitado chegará para dentro de uma função através do seu argumento (nomeUsuario) 

// Entrada de dados do nome
entradaDeDados.question('Digite o seu nome: ', function (nomeUsuario) {
    // Recebe o nome digitado 
    var nome = nomeUsuario

    // Entrada de dados da idade
    entradaDeDados.question('Digite sua idade: ', function (idadeUsuario) {
        var idade = idadeUsuario

        // Entrada de dados do email
        entradaDeDados.question('Digite o seu email: ', function (emailUsuario) {
            var email = emailUsuario

            // Entrada de dados do telefone
            entradaDeDados.question('Digite o seu telefone: ', function (telefoneUsuario) {
                var telefone = telefoneUsuario

                // Exibe uma mensagem no terminal com o nome digitado 
                console.log('Bem vindo ao aplicativo, ' + nome)
                console.log('A idade informada foi, ' + idade)
                console.log('O email informado foi, ' + email)
                console.log('O telefone informado foi, ' + telefone)
                
                // Encerra o processamento da entrada de dados 
                entradaDeDados.close()
            })
        })



    })
})

