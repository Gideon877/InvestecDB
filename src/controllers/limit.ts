import "reflect-metadata";
import { Request, Response } from "express";
import { Converter } from "csvtojson";
import { getRepository, getManager } from 'typeorm';
import { Limits } from "../entity/Limits";

export let show = async (req: Request, res: Response) => {
    var converter = new Converter({});
    const manager = getManager().getRepository(Limits);

    converter.fromFile("./src/csv/Entity_Limits.csv", async (err: any, results: any) => {
        if (err) console.log(err);

        await manager.query("DELETE FROM limits");
        console.log("Deleted All Existing Data from Limits table.");

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

            manager.save(limit).then((result: any) => {
                console.log("Saved with id:", result.id)
            }).catch(error => console.log('Duplicates!'));
        }
        console.log("Entity Limits table data saved.");
    });

    const data = await manager.find()
    res.send(data);
}

export let getId = async (req: Request, res: Response) => {
    var id = req.params.id;
    console.log("Entity_Id:", id);

    const manager = getManager().getRepository(Limits);
    const data = await manager.find(
        { "Entity_Id": id }
    );
    res.send(data);
}
