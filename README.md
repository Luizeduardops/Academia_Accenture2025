Academia_Accenture2025
Este projeto tem como objetivo automatizar testes ponta a ponta utilizando Cypress e Cucumber para validar funcionalidades da página WebTables do site DemoQA . A automação cobre cenários de cadastro, edição, exclusão e validação de campos obrigatórios e formatos inválidos.

Estrutura do Projeto
cypress/e2e/ : Contém os cenários de testes escritos em Gherkin ( .feature), como cadastro de usuário com sucesso e falha.
cypress/support/page/ : Objetos de página e comandos customizados para facilitar a manutenção e reutilização dos testes.
cypress/support/step-definitions/ : Implementação dos passos dos planos definidos nos arquivos .feature.
cypress/fixtures/ : Dados simulados para alimentação dos testes automatizados.
cypress.config.js : Arquivo de configuração do Cypress.
package.json : Gerenciamento de dependências e scripts do projeto.
Ambiente Cypress ( cypress.env.json)
O arquivo cypress.env.jsonpermite definir variáveis de ambiente para uso em testes, como URLs, credenciais ou dados confidenciais.
Exemplo de uso:

{
  "baseUrl": "https://demoqa.com/webtables",
  "adminUser": "admin",
  "adminPassword": "123456"
}
Sem código, você pode acessar essas variáveis usando Cypress.env('baseUrl').

Funcionalidades Testadas
Cadastro de Usuário
Sucesso: Preenchimento correto de todos os campos obrigatórios.
Falha: Tentativa de cadastro com campos obrigatórios em branco ou preenchidos incorretamente (ex: e-mail sem "@").
Edição de Usuário
Alteração de dados de usuários já cadastrados.
Exclusão de Usuário
Remoção de usuários da tabela.
Validação de Campos
Verificação de campos obrigatórios e formatos inválidos, como nome vazio ou e-mail inválido.
Exemplos de Cenários
Arquivo:cypress/e2e/CadastroFalho.feature

Falha ao cadastrar usuário com campo obrigatório em branco

Acesse a página do WebTables
Abra o formulário de cadastro
Preenche os campos sem o primeiro nome
Valide que o campo #firstNamefica em vermelho exigindo valor
Falha ao cadastrar usuário com e-mail inválido

Acesse a página do WebTables
Abra o formulário de cadastro
Verifique os campos com dados válidos, exceto o e-mail inválido
Enviar ou formulário
Valide que o campo #userEmailfica em vermelho exigindo valor
Como Executar
Instalar as dependências:

npm install
Execute os testes em modo interativo:

npx cypress open
Ou execute em modo headless:

npx cypress run
Tecnologias Utilizadas
Cypress : Framework de automação de testes ponta a ponta.
Pepino : Utilização da linguagem Gherkin para descrever planos de teste.
Faker.js : Geração de dados falsos para testes.
Como Contribuir
Faça um fork do projeto.
Crie um branch para seu feature ou Correção ( git checkout -b minha-feature).
Faça suas alterações ( git commit -m 'Minha nova feature').
Faça push para o branch ( git push origin minha-feature).
Abra um Pull Request.
Autor
Luiz Eduardo
