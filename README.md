# Academia_Accenture2025

Este projeto tem como objetivo automatizar testes end-to-end utilizando Cypress e Cucumber para validar funcionalidades da página WebTables do site [DemoQA](https://demoqa.com/webtables). A automação cobre cenários de cadastro, edição, exclusão e validação de campos obrigatórios e formatos inválidos.

## Estrutura do Projeto

- **cypress/e2e/**: Contém os cenários de testes escritos em Gherkin (`.feature`), como cadastro de usuário com sucesso e falha.
- **cypress/support/page/**: Page Objects e comandos customizados para facilitar a manutenção e reutilização dos testes.
- **cypress/support/step-definitions/**: Implementação dos passos dos cenários definidos nos arquivos `.feature`.
- **cypress/fixtures/**: Dados mockados para alimentar os testes automatizados.
- **cypress.config.js**: Arquivo de configuração do Cypress.
- **package.json**: Gerenciamento de dependências e scripts do projeto.

## Cypress Environment (`cypress.env.json`)

O arquivo `cypress.env.json` permite definir variáveis de ambiente para uso nos testes, como URLs, credenciais ou dados sensíveis.  
Exemplo de uso:

```json
{
  "baseUrl": "https://demoqa.com/webtables",
  "adminUser": "admin",
  "adminPassword": "123456"
}
```

No código, você pode acessar essas variáveis usando `Cypress.env('baseUrl')`.

## Funcionalidades Testadas

- **Cadastro de Usuário**
  - Sucesso: Preenchimento correto de todos os campos obrigatórios.
  - Falha: Tentativa de cadastro com campos obrigatórios em branco ou preenchidos incorretamente (ex: e-mail sem "@").
- **Edição de Usuário**
  - Alteração de dados de usuários já cadastrados.
- **Exclusão de Usuário**
  - Remoção de usuários da tabela.
- **Validação de Campos**
  - Verificação de campos obrigatórios e formatos inválidos, como nome vazio ou e-mail inválido.

## Exemplos de Cenários

Arquivo: `cypress/e2e/CadastroFalho.feature`

- **Falha ao cadastrar usuário com campo obrigatório em branco**
  - Acessa a página de WebTables
  - Abre o formulário de cadastro
  - Preenche os campos sem o firstname
  - Valida que o campo `#firstName` fica em vermelho exigindo valor

- **Falha ao cadastrar usuário com e-mail inválido**
  - Acessa a página de WebTables
  - Abre o formulário de cadastro
  - Preenche os campos com dados válidos, exceto o e-mail inválido
  - Submete o formulário
  - Valida que o campo `#userEmail` fica em vermelho exigindo valor

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Execute os testes em modo interativo:
   ```sh
   npx cypress open
   ```
   Ou execute em modo headless:
   ```sh
   npx cypress run
   ```

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/): Framework de automação de testes end-to-end.
- [Cucumber](https://cucumber.io/): Utilização da linguagem Gherkin para descrever cenários de teste.
- [Faker.js](https://fakerjs.dev/): Geração de dados fake para testes.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Minha nova feature'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Autor

Luiz Eduardo
