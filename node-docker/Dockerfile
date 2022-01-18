# 1st step: build
FROM node:lts-alpine AS builder

WORKDIR /app-dev

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install
COPY src/ src/

COPY webpack.config.js .
RUN yarn build

# 2nd step: copy build result to Nginx docroot and run
FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY --from=builder /app-dev/dist/ /app/dist/

# Run
CMD npm start