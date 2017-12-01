import "reflect-metadata";
import { Request, Response } from "express";
import { getRepository, getManager } from 'typeorm';
import { Converter } from "csvtojson";
import { Relationships } from "../entity/Relationships";

export let share = async (req: Request, res: Response){

    const manager = getManager().getRepository(Relationships);
    const data = await manager.query("SELECT COUNT(*) AS Share_Amount, Relationship_Type FROM relationships GROUP BY Relationship_Type")
    // console.log(data)
    res.send(data)
}

export let type = async (req: Request, res: Response){
    var id = req.params.type;
    console.log("------------------------")
    console.log('id', id)
    const manager = getManager().getRepository(Relationships);
    const data = await manager.find({
        "Relationship_Type": id
    })
    console.log(data)
    res.send(data)
}
