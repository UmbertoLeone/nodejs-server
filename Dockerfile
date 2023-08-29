FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /urs/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 8080
CMD [ "pnpm", "start" ]
