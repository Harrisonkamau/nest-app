<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Description

A todos app created in Nest.js and MongoDB.

## Installation

```bash
$ npm install
```

Start a Mongod server by opening a terminal run: `mongod`. Ensure you have MongoDB driver installed on your PC. Else, follow these instructions [here](https://docs.mongodb.com/manual/installation/).

Ensure you have Node -v `10.13` and above.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Routes
**Root route**

To see the home page, start your server (as shown above) and navigate to: `localhost:3000`

**Retrieve all todos**

To see all available todos, visit `localhost:3000/todos` in your browser.

**Create new todo**

Ensure your `mongod` instance is running, then open your API client of choice (either [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/)) and perform a `POST` request with this body:
```json
{
	"name": "First todo",
	"description": "This is my Db record"
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
