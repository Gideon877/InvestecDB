# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
# Investec_TypeORM_DB

### Getting Started

- Backend (Server side).

Clone or download this [respository](https://github.com/Gideon877/InvestecDB.git) to your machine from GitHub.

#### Cloning

- Go to the terminal and and copy and paste the following code;

  ```
     $ git clone https://github.com/Gideon877/InvestecDB.git
  ```

### Prerequisites

What things you need to install the software and how to install them?

- NodeJS
- MySQL
- TypeORM
- package.json dependencies


### Installing;

#### NodeJS

Before you try to install NodeJS open a terminal window and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

To install it on Ubuntu you can use the [apt-get package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions.md).

Alternatively you can use nvm, the [Node Version Manager](https://github.com/creationix/nvm#install-script.md) to manage the version of NodeJS on your PC.

#### Mysql

Install database driver:

How to [Install Mysql](https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial).

#### TypeORM
First, install TypeORM globally:
- Install npm package:

``` npm install typeorm -g ```

You need to install reflect-metadata shim:

``` npm install reflect-metadata --save ```

You may need to install node typings:

``` npm install @types/node --save ```


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

To install all dependencies required for the app to run, on the terminal navigate to the InvestecDB folder, and type `npm install` .


## Running the app locally

- In the command line, navigate to the InvestecDB directory. Once you are in the appropriate directory input this command

`$ tsc & nodemon`

- The following message should be displayed `App is running at http://localhost:3016 in development mode`

- Then open a new tab on your browser and type this `http://localhost:3016` and the app will open.

## Deployment

The app is not deployed yet.

## Built With

- [MySQL](https://www.mysql.com/) - Cloud MongoDB server
- [NPM](https://www.npmjs.com) - Dependency Management
- [Bootstrap](https://bootswatch.com/cerulean/) - The web framework used

## Versioning

`"version": "1.0.0",`

## Author

- **Thabang Gideon Magaola** - _Initial work_ - [Thabang Gideon](https://github.com/Gideon877)

## License

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details `"license": "ISC"`
