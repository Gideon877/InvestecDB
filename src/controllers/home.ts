import "reflect-metadata";
import { Request, Response } from "express";
import { getRepository, getManager } from 'typeorm';
import { Converter } from "csvtojson";
import { Relationships } from "../entity/Relationships";

export let show = async (req: Request, res: Response) => {
    var converter = new Converter({});
    const manager = getManager().getRepository(Relationships);

    converter.fromFile("/home/bootcamp/projects/InvestecDB/src/csv/Entity_Relationships.csv", async (err: Error, results: any) => {

        if (err) console.log(err);
        // Delete Relationships table contents to avoid duplicates
        await manager.query("DELETE FROM relationships");

        console.log("....Inserting new data into the Relationships table....");

        for (let i: number = 0; i < results.length; i++) {
            let relationship = new Relationships(), entity = results[i];

            relationship.Parent_Entity_Id = parseInt(entity["Parent Entity Id"]);
            relationship.Parent_Entity_Name = entity["Parent Entity Name"];
            relationship.Relationship_Type = entity["Relationship Type"];
            relationship.Entity_Id = parseInt(entity["Entity Id"]);
            relationship.Entity_Name = entity["Entity Name"];

            manager.save(relationship).then((result: any) => {
                console.log("Saved with id:", result.id)
            }).catch(error => console.log('Duplicates!'));
        }
    })
    const data = await manager.query("SELECT COUNT(*) AS Children_Banks, Parent_Entity_Name FROM relationships GROUP BY Parent_Entity_Name");
    console.log("Data:",data)
    res.send(data);
}
export let children = async (req: Request, res: Response) => {
    var id = req.params.id;
    console.log("Name:", id);

    const manager = getManager().getRepository(Relationships);
    const data = await manager.find(
        { "Entity_Id": id }
    );

    res.send(data)
}
