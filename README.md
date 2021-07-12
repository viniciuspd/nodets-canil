# nodets-canil

### Projeto feito no módulo do curso Node + Typescript.

## Pre-requisitos

npm install -g nodemon typescript ts-node

# Etapas

1°  Etapa - > Na pasta do Projeto execute npm init -> Iniciar o node... Cria o arquivo package.json
2° Etapa --> Na pasta do Projeto execute tsc --init --> Iniciar o typescript...cria o arquivo de configuração do TS.
3° Etapa --> Entrar no arquivo de configuração do TypeScript "tsconfig.json" e fazer as seguintes mudanças:
  -"target": "es6", --> Escolher a versão do JS de es6....
    "outDir": "./dist", --> Ao salvar o arquivo ts ira gerar um arquivo JS, na pasta dist.
    "rootDir": "./src",  ---> Vai entrar na pasta src e procurar os arquivos TS, para conversão para JS.
    "moduleResolution": "node",
4° Etapa --> Instalar o express e o mustache, use o seguinte código: "npm install express mustache-express dotenv"
Express // Serve para criar o servidor
mustache-express // Serve para criar o view do servidor, o html....
dotenv --> Para colocar o projeto no ar...
5° Etapa - Instalação dos types para reconhecer os códigos no typescript, usar os seguintes códigos:
npm install --save-dev @types/express @types/mustache @types/node // aqui vai instalar todos os types dependentes , tanto para o express,mustache e node...	
Logo depois disso por causa do --save-dev você pode checar se tudo foi instalado nas dependencias, basta olhar o arquivo package.json...
6° Etapa - Instalar o nodemon typescript e ts-node global: npm install -g nodemon typescript ts-node
No caso aqui o nodemon sera instalado que é utilizado para salvar os arquivos automaticamente, gerando o arquivo JS
7° Etapa - Depois de instalar o nodemon, você vai no package.json, vai em scripts e cria o comando start com o nodemon...logo abaixo o código:
Em scripts:
"start": "nodemon -e ts,json,mustache src/server.ts" // esse comando toda vez que você editar um arquivo ts,json ou mustache vai atualizar o projeto, o arquivo