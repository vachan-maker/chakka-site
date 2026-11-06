FROM node:22-alpine

WORKDIR /usr/src/app

EXPOSE 3000


COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build

CMD ["npm", "start"]