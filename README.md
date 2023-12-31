# Node Js Server

**Version:** 1.0.0

**Description:**

This project is a Node.js applicatio. It is built with TypeScript and uses a Postgres database.

**Getting started:**

1. Clone the repository: `git clone https://github.com/umbertoleone/nodejs-server.git`

2. Install the dependencies: `pnpm install`

3. Start the database: `docker-compose up -d postgres`

4. Start the application: `docker-compose up -d backend`

5. Access the application in your browser at http://localhost:5000

**Commands:**

* `pnpm start`: Starts the application in development mode.
* `pnpm build`: Builds the application for production.
* `pnpm start:docker`: Starts the application in Docker mode.
* `docker-compose up -d`: Starts the database and application in Docker mode.
* `docker-compose run backend pnpm db:migrate`: Migrates the database.
* `docker-compose run backend pnpm db:seed:dev`: Seeds the database with development data.

**Environment variables:**

* `DATABASE_URL`: The URL of the Postgres database.
* `PORT`: The port that the application should listen on.
* `JWT_SECRET`: The secret used to generate JWT tokens.
* `SALT`: The salt used to hash passwords.
* `LOG_FILENAME`: The name of the log file.

**Testing:**

To run the tests, execute the following command:
