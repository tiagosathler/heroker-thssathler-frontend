FROM node:lts-alpine3.14

ENV APP = /app
WORKDIR $APP

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4000

ENV REACT_APP_API = https://heroker-thssathler-backend.herokuapp.com

CMD ["npm", "start"]