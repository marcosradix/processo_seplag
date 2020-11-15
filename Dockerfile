FROM node:12.16.1-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/seplagce /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t seplagce .
# docker run -p 8081:80 seplagce
#docker-compose -f "docker-compose.yml" up -d --build