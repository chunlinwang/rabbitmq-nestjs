
## Description

This is a nestjs project which is implemented microservice rabbitmq with the official lib.

With the nestjs official way, we can not **publish** the msg to the exchange.
So we cannot have the routing of rabbitmq.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```