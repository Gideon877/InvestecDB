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
    var limitManager = connection.getRepository(Limits);

    converter.fromFile("/home/bootcamp/projects/InvestecDB/src/csv/Entity_Relationships.csv", async (err, results) => {
        await manager.query("DELETE FROM relationships;");
        console.log("Deleted All Existing Data from Relationships table.");

        if (err) console.log(err);

        console.log("Inserting new data into the Relationships table....");

        for (let i = 0; i < results.length; i++) {
            let relationship = new Relationships(), entity = results[i];

            relationship.Parent_Entity_Id = parseInt(entity["Parent Entity Id"]);
            relationship.Parent_Entity_Name = entity["Parent Entity Name"];
            relationship.Relationship_Type = entity["Relationship Type"];
            relationship.Entity_Id = parseInt(entity["Entity Id"]);
            relationship.Entity_Name = entity["Entity Name"];

            manager.save(relationship).then((result: any) => {
                console.log("Result:", result)
            }).catch(error => console.log('duplicates'));
        }
        console.log("Entity Relationship table data saved");
    });

    // Limits Table
    converter.fromFile("/home/bootcamp/projects/InvestecDB/src/csv/Entity_Limits.csv", async (err: any, results: any) => {
        await limitManager.query("DELETE FROM limits;");
        console.log("Deleted All Existing Data from Limits table.");

        if (err) console.log(err);

        console.log("Inserting new data into the Limits table....");

        for (let i = 0; i < results.length; i++) {
            let limit = new Limits(), entity = results[i];

            limit.Entity_Id = parseInt(entity["Entity Id"]);
            limit.Risk_Taker_Group_Name = entity["Risk Taker Group Name"];
            limit.Risk_Taker_Name = entity["Risk Taker Name"];
            limit.Facility_Id = parseInt(entity["Facility Id"]);
            limit.Facility_Type = entity["Facility Type"];
            limit.Limit_Id = parseInt(entity["Limit Id"]);
            limit.Limit_Type = entity["Limit Type"];
            limit.Product = entity["Product"];
            limit.Risk_Type = entity["Risk Type"];
            limit.Currency = entity["Currency"];
            limit.Exposure_Amount = parseFloat(entity["Exposure Amount"]);
            limit.Total_Current_Limit = parseInt(entity["Total Current Limit"]);
            limit.Total_Approved_Limit = parseInt(entity["Total Approved Limit"]);

            console.log(limit);

          //  limitManager.save(limit).then((result: any) => {
           //     console.log("Result:", result)
           // }).catch(error => console.log('Duplicates'));
        }
        console.log("Entity Limits table data saved.");
    });


}).catch(error => console.log(error));
