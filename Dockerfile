# Stage 1
FROM node:latest as builder
WORKDIR /seplagce
COPY . .
RUN npm install
RUN npm run build --prod
#RUN npm i -g json-server

# Stage 2
FROM nginx:alpine
COPY --from=builder /seplagce/dist/seplagce /usr/share/nginx/html
#RUN json-server --watch db_seplag.json  --port 3000