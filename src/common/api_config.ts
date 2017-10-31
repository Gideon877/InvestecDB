
import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';
import { Limits } from "../entity/Limits";
import { Relationships } from "../entity/Relationships";

export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "1",
    database: "InvestecDB",
    entities: [
        Limits,
        Relationships
    ],
    synchronize: true,
    logging: false
}
