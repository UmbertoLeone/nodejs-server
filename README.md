
README.md

Project Name: projectname

Version: 1.0.0

Description:

This project is a Node.js application that manages a listening queue on Spotify. It is built with TypeScript and uses a Postgres database.

Getting started:

Clone the repository:
git clone https://github.com/username/projectname.git
Install the dependencies:
pnpm install
Start the database:
docker-compose up -d postgres
Start the application:
docker-compose up -d backend
Access the application in your browser at http://localhost:5000
Commands:

pnpm start: Starts the application in development mode.
pnpm build: Builds the application for production.
pnpm start:docker: Starts the application in Docker mode.
docker-compose up -d: Starts the database and application in Docker mode.
docker-compose run backend pnpm db:migrate: Migrates the database.
docker-compose run backend pnpm db:seed:dev: Seeds the database with development data.
Environment variables:

DATABASE_URL: The URL of the Postgres database.
PORT: The port that the application should listen on.
JWT_SECRET: The secret used to generate JWT tokens.
SALT: The salt used to hash passwords.
LOG_FILENAME: The name of the log file.
Testing:

To run the tests, execute the following command:

pnpm test
Deployment:

To deploy the application to production, you can use a Docker orchestration platform such as Kubernetes.

License:

This project is licensed under the MIT license.
