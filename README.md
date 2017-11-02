# Awesome Project Build with TypeORM

Steps to run this project:

<!-- 1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command -->
<!-- Install Gulp tools and dev dependencies:

```bash
npm install -g gulp
npm install
``` -->


## Getting Started

- Backend (Server side).

1. Building
2. Installation
3. Create MySQL database
4. Run the Application


## Building

First open the terminal/CLI copy and paste the following code:
```bash
git clone https://github.com/Gideon877/InvestecDB.git
```

Change to the InvestecDB directory:

```bash
cd InvestecDB
```

## Installation
### Prerequisites

What things you need to install and how to install them?

1. TypeScript
2. NodeJS
3. MySQL
4. TypeORM
5. Package.json dependencies


In order to build the TypeScript compiler, ensure that you have TypeScript, MySQL, TypeORM and NodeJS Installed.
For the latest stable version:

#### TypeScript

```bash
npm install -g typescript
```
#### NodeJS

Before you try to install NodeJS open a terminal window and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

To install it on Ubuntu you can use the [apt-get package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions.md).

Alternatively you can use nvm, the [Node Version Manager](https://github.com/creationix/nvm#install-script.md) to manage the version of NodeJS on your PC.

#### Mysql

Install database driver:

How to [Install Mysql](https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial).

#### TypeORM

Install TypeORM globally:

```bash
npm install typeorm -g
```

#### Package.json dependencies

```json
"dependencies": {
   "body-parser": "^1.17.1",
   "csvtojson": "^1.1.9",
   "express": "^4.16.2",
   "express-myconnection": "^1.0.4",
   "express-session": "^1.14.2",
   "mysql": "^2.5.3",
   "prompt": "^0.2.14",
   "reflect-metadata": "^0.1.10",
   "typeorm": "0.1.1"
},
"devDependencies": {
  "nodemon": "^1.11.0",
  "typedoc": "^0.8.0"
},
"engine": {
  "node": "v4.2.6"
}
```


You may need to install node typings:

```bash
npm install @types/node --save
```
To install all dependencies required for the app to run, copy and paste this command:
```bash
npm install
```


## 3. Create MySQL database

Once you have MySQL installed on your droplet, you can access the MySQL shell by typing the following command into terminal:

```bash
mysql -u root -p
```
After entering the root MySQL password into the prompt, you will be able to start building your MySQL database.

#### Creating a database.

```bash
CREATE DATABASE InvestecDB;
```
To check if the database is created run this command:
```bash
SHOW DATABASES;
```

Once databse is created, edit ormconfig.json file and put your own database connection configuration options in there.

#### 4. Run the Application

Once you finish with configuration and all node modules are installed you can run your application:

```bash
tsc
```
then run
```bash
npm start
```

The following message should be displayed `App is running at http://localhost:3016 in development mode`
Then open a new tab on your browser and type this `http://localhost:3016/api/home` and the app will open.

## Deployment

The app is not deployed yet.

## Built With

- [MySQL](https://www.mysql.com/) - Cloud MongoDB server
- [NPM](https://www.npmjs.com) - Dependency Management
<!-- - [Bootstrap](https://bootswatch.com/cerulean/) - The web framework used -->

## Versioning

`"version": "0.0.1",`

## Author

- **Thabang Gideon Magaola** - _Initial work_ - [Thabang Gideon](https://github.com/Gideon877)

## License

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details `"license": "ISC"`
