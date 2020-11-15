# Stage 1
FROM node:12.16.1 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/seplagce /usr/share/nginx/html