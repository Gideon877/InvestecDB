/*** Module dependencies. ***/
"use strict";

import 'reflect-metadata';
import * as express from "express";
import * as myConnection from 'express-myconnection';
import { createConnection } from 'typeorm';
import * as bodyParser from "body-parser";
import * as path from "path";
import * as mysql from 'mysql';

import { Request, Response } from "express";
import { getRepository } from 'typeorm';

//Controllers (route handlers).
import * as apiConfig from './common/api_config';
import * as entityController from "./controllers/limit";
import * as homeController from "./controllers/home";

import { Relationships } from "./entity/Relationships";
// Create Express server.
const app = express();

app.set("port", (process.env.PORT || 3015));

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


//  Entity Relationships
app.get('/api/home', homeController.show);
app.get('/api/home/:name', homeController.children);


// Limit Entity
app.get('/api/limits',entityController.show);
app.get('/api/limits/:id', entityController.getId);

// Inserting into mysql database
// app.get('/api/relationship', routesdb.relationship);
// app.get('/api/limit', routesdb.limit);


createConnection(apiConfig.dbOptions).then(async connection => {
    console.log('Connected to MySQL DB');
}).catch(error => console.log('TypeORM connection error: ', error));

/**Start Express server */
app.listen(app.get("port"), () => {
    console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("Press CTRL-C to stop\n");
});

module.exports = app;
