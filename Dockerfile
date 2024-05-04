ARG NODE_VERSION
ARG ALPINE_VERSION
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as build

RUN apk update && apk add build-base libc6-compat gcompat curl

RUN npm i -g pnpm

COPY ./ /app

WORKDIR /app

RUN pnpm i
