FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3005

RUN npm run build

CMD ["node", "dist/main"]