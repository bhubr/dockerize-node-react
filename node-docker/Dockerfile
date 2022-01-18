# 1st step: build
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install
COPY src/ src/

RUN yarn build

# 2nd step: copy build result to Nginx docroot and run
FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY --from=builder /app/dist/ /app/dist/
COPY --from=builder /app/node_modules/ /app/node_modules/

# Run
CMD npm start