FROM node:14

WORKDIR /usr/typeapp

COPY package*.json ./

RUN npm install

COPY . .

#  for typescript
RUN npm run build
WORKDIR ./build
EXPOSE 5070

CMD node src/main.js