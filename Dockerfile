FROM node:14-alpine

WORKDIR /home/app

COPY . .

EXPOSE 8080