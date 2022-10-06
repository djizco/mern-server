# MERN Server

For those who wish to separate [MERN Boilerplate](https://github.com/djizco/mern-boilerplate) into the client and server, this repo is for the server. This project is meant to be used alongside [MERN Client](https://github.com/djizco/mern-client).

## Requirements

* Operating System: MacOS or Linux
* [Node.js](https://nodejs.org/) (I recommend installing with [NVM](https://github.com/nvm-sh/nvm))
* [Homebrew](https://brew.sh) (to install MongoDB)

## Quick Start

#### Setup

```bash
npm install

# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community
```

Start the database
```bash
brew services start mongodb-community
```

#### for Development and Production

Start the server
```bash
npm start
```

#### Other Commands

```bash
npm test
npm run lint
npm run lint:fix
npm run test:verbose
npm run test:coverage
npm run test:watch
```

## Setup Instructions

Note: This is now a github template project. This makes copying the contents of the project
into a new repo very simple.

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage
* LICENSE: (update to your preferred license)
* this README.md

This is also a good time to go through the included libraries to add or remove features that you want.

After this you can commit the files into a new repository and push up to your github.
You can now start updating files in your client to begin working on your own project!

## Code Structure

```
- server
  - passport
  - database
  - routes
- config
- scripts
```

## Technologies

[Express](http://expressjs.com/) - Node Application Framework

[MongoDB](https://www.mongodb.com/) - Document Database

[Mongoose](http://mongoosejs.com/) - MongoDB Framework

[Passport](http://www.passportjs.org/) - Authentication Framework

[Ramda](http://ramdajs.com/) - Functional Library

[ESLint](http://eslint.org/) - Code Linter

[Jest](https://jestjs.io/) - Testing Framework
