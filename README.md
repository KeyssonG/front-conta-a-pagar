
# FrontContasApagar

Este projeto é uma aplicação Angular para gerenciamento de contas a pagar.

## Funcionalidades
- Cadastro de contas a pagar
- Listagem de contas cadastradas
- Visualização de datas, valores e status
- Atualização automática da lista

## Tecnologias Utilizadas
- Angular 20+
- RxJS
- TypeScript
- HTML e CSS

## Como executar

### Pré-requisitos
- Node.js 18+
- Angular CLI

### Instalação
1. Clone o repositório:
	```bash
	git clone https://github.com/KeyssonG/front-conta-a-pagar.git
	cd front-conta-a-pagar
	```
2. Instale as dependências:
	```bash
	npm install
	```

### Executando o projeto
Para iniciar o servidor de desenvolvimento:
```bash
npm start
```
Acesse [http://localhost:4200](http://localhost:4200) no navegador.

### Testes
Para rodar os testes unitários:
```bash
npm test
```

## Estrutura do Projeto
```
front-contas-apagar/
├── src/
│   ├── app/
│   │   ├── cadastro-conta.component.*
│   │   ├── lista-contas.component.*
│   │   ├── app.*
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── public/
│   └── favicon.ico
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
```

## Observações
- O backend deve estar rodando em `http://localhost:8084` para cadastro e listagem de contas.
- O projeto segue boas práticas de Angular e TypeScript.


