# utf-8
# language: pt

Funcionalidade:  Cadastro de novo usuário

    Cenario: Cadastrar novo usuário com sucesso
        Dado que eu acesso a página de WebTables
        Quando clico no botão ADD
        E preencho todos os campos obrigatórios com dados válidos
        E submeto o formulário
        Então o novo usuário deve aparecer corretamente na tabela

    Cenario: Cadastrar e editar o usuário com sucesso
        Dado que eu acesso a página de WebTables
        Quando faço um novo cadastro
        E clico no botão de editar
        E altero os dados dos campos
        Então valido que a alteração foi feita com sucesso

    Cenario: Cadastrar e excluir o usuário com sucesso
        Dado que eu acesso a página de WebTables
        Quando clico no botão delete do 3 usuário
        Então valido que o usuário foi deletado com sucesso



