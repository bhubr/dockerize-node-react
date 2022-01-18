# 1st step: build
FROM node:lts-alpine AS builder

WORKDIR /app

# Copy required files
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
# WHY did `COPY src/ .` did NOT WORK?
# This is (IMHO) better than COPY . .
# (because any change in the file tree screws the cache)
COPY src/ src
COPY public/ public

# Install dependencies
RUN yarn install

# # Build the app
RUN yarn build

# # 2nd step: copy build result to Nginx docroot and run
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/

# # No need for CMD: https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/
