FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080
ENV MONGODB_URI=mongodb+srv://root:root@cluster0.ly6dns7.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET=shhhh
CMD [ "node", "server.js" ]
