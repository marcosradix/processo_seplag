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

## Usei api fake
todos os documentos pdf estão salvos no banco do json-server como base64 String

## Build Docker
para dar build com docker e subir a aplicação basta usar o comanda abaixo
#docker-compose -f "docker-compose.yml" up -d --build

# Caso quereira subir em uma porta diferente pare o container e use o comando a baixo
docker run -p 8000:80 seplagce:latest
caso precise subir a aplicação via container use este mesmo comando acima.

para acessar a aplicação que o docker subiu basta acessar no navegador com porta padrão 8081
`http://localhost:8081/`

## Se usou docker lembrar de subir o json-server
lembrar de subir o json server na raiz do projeto "json-server --watch db_seplag.json"

### O que é esta aplicação
Esta aplicação é usada para gerar benefício de aposentadoria para servidores públicos por um processo digital
onde os documentos relativos ao processo são enexados ao sistema e o processo para de um setor para outro até a finalização. 
