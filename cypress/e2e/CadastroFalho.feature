# utf-8
# language: pt


Funcionalidade:  Cadastro de novo usuário inválido

    Cenario: Falha ao tentar cadastrar usuário com campo obrigatório em branco
        Dado que eu acesso a página de WebTables
        Quando eu abro o formulário de cadastro
        E preencho os campos sem o firstname 
        Então valido que o campo "#firstName" ficará em vermelho exigindo um valor
       
    
    Cenario: Falha ao tentar cadastrar usuário co email sem @
        Dado que eu acesso a página de WebTables
        Quando eu abro o formulário de cadastro
        E preencher os campos com dados válidos exceto o e-mail inválido 
        E submeto o formulário
        Então valido que o campo "#userEmail" ficará em vermelho exigindo um valor

  
 
