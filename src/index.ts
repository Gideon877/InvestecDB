import "reflect-metadata";
import { createConnection } from "typeorm";
import { Converter } from "csvtojson";

import { Limits } from "./entity/Limits";
import { Relationships } from "./entity/Relationships";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1",
    database: "InvestecDB",
    entities: [
        Relationships,
        Limits
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
    var converter = new Converter({});
    var manager = connection.getRepository(Relationships);

    // Delete all table contents to avoid duplicates

    converter.fromFile("/home/bootcamp/projects/InvestecDB/src/csv/Entity_Relationships.csv", async (err, results) => {
        await manager.query("DELETE FROM relationships;");
        console.log("Deleted All Existing Data from Relationships table.");

        if (err) console.log(err);

        console.log("Inserting new data into the Relationships table....");

        for (let i = 0; i < results.length; i++) {
            let relationship = new Relationships();
            var entity = results[i];

            relationship.Parent_Entity_Id = parseInt(entity["Parent Entity Id"]);
            relationship.Parent_Entity_Name = entity["Parent Entity Name"];
            relationship.Relationship_Type = entity["Relationship Type"];
            relationship.Entity_Id = parseInt(entity["Entity Id"]);
            relationship.Entity_Name = entity["Entity Name"];

            // console.log('relationship', relationship)
            manager.save(relationship).then((result: any) => {
                console.log("Result:", result)
            }).catch(error => console.log('duplicates'));
        }
        console.log("Entity has been saved");
    });
}).catch(error => console.log(error));
