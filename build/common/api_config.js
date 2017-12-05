"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Limits_1 = require("../entity/Limits");
const Relationships_1 = require("../entity/Relationships");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "1",
    database: "InvestecDB",
    entities: [
        Limits_1.Limits,
        Relationships_1.Relationships
    ],
    synchronize: true,
    logging: false
};
//# sourceMappingURL=api_config.js.map