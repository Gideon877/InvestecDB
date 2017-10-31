import "reflect-metadata";
import { Request, Response } from "express";
import {getRepository, getManager} from 'typeorm';
import {Limits} from "../entity/Limits";


export let show = async (req: Request, res: Response) => {

	const manager = getManager().getRepository(Limits);
	const data = await manager.find()

	res.send(data);
}

export let getId = async (req: Request, res: Response) => {
	var id = req.params.id;
	console.log("Entity_Id:", id);

	const manager = getManager().getRepository(Limits);
	const data = await manager.find(
		{"Entity_Id": id}
	);

	res.send(data)
}
