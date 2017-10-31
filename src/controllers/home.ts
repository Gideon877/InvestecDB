import "reflect-metadata";
import { Request, Response } from "express";
import {getRepository, getManager} from 'typeorm';
import {Relationships} from "../entity/Relationships";


export let show = async (req: Request, res: Response) => {

	const manager = getManager().getRepository(Relationships);
	const data = await manager.query("SELECT COUNT(*), Parent_Entity_Name FROM relationships GROUP BY Parent_Entity_Name");

	res.send(data);
}

export let children = async (req: Request, res: Response) => {
	var name = req.params.name;
	console.log("Name:", name);

	const manager = getManager().getRepository(Relationships);
	const data = await manager.find(
		{"Parent_Entity_Name": name}
	);

	res.send(data)
}
