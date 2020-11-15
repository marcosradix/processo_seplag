# SEPLAG
Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Implantação

Rode `ng serve` para dev server. Digite no navegador `http://localhost:4200/`.

## Como Subir o projeto com o json-server
instale de forma global o json-server com o comando npm i json-server -g
o json-server está simulando o uso de uma api
agora é só subir o projeto com o comando npm run start que já está configurado para subir o projeto e o json-server

## Build

Run `ng build` para fazer build do projeto. Os arquivos do build estarão em `dist/` diretório. Use o `--prod` flag para build de produção.


## Docker
para dar build com docker basta usar o comanda abaixo
docker build --pull --rm -f "Dockerfile" -t seplagce:v1 . 
obs: o ponto faz parte do comando

para rodar basta executar o comando a baixa
docker run --rm -d  -p 80:80/tcp seplagce:v1

para acessar a aplicação que o docker subiu basta acessar no navegador
`http://localhost:80/`

## Se usou docker
lembrar de subir o json server na raiz do projeto "json-server --watch db_seplag.json"
