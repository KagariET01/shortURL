FROM node:latest
WORKDIR /app

RUN npm install discord.js

ADD ./ /app
CMD ["node","main.js"]
