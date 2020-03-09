FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --verbose && ls -a .

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
