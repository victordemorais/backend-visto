FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

run npm install

COPY . .

EXPOSE 4000

CMD ["npm", "db:migrate"]
CMD ["npm", "start"]
