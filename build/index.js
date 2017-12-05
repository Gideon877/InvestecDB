/*** Module dependencies. ***/
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const apiConfig = require("./common/api_config");
const entityController = require("./controllers/limit");
const homeController = require("./controllers/home");
const shareRoute = require("./controllers/share");
const typeorm_1 = require("typeorm");
const app = express(); // Create Express server.
app.set("port", (process.env.PORT || 3016));
app.use(bodyParser.json()); // parse application/json
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//  Entity Relationships
app.get('/api/home', homeController.show);
app.get('/api/home/:id', homeController.children);
// Limit Entity
app.get('/api/limits', entityController.show);
app.get('/api/limits/:id', entityController.getId);
// Relationship_Type
app.get('/api/share', shareRoute.share);
app.get('/api/share/:type', shareRoute.type);
// Inserting into mysql database
// app.get('/api/relationship', routesdb.relationship);
// app.get('/api/limit', routesdb.limit);
/* database connection*/
typeorm_1.createConnection(apiConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log('Connected to MySQL DB.');
})).catch(error => console.log('TypeORM connection error: ', error));
/**Start Express server */
app.listen(app.get("port"), () => {
    console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("Press CTRL-C to stop\n");
});
module.exports = app;
//# sourceMappingURL=index.js.map