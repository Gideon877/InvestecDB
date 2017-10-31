"use strict";
import { Request, Response, NextFunction } from "express";

export let show = (req: Request, res: Response) => {
	console.log('Got the Function!')
	req.getConnection(function(err: Error, connection){
		if (err) console.log(err); console.log('connected');

		connection.query('SELECT COUNT(*), Parent_Entity_Name FROM relationships GROUP BY Parent_Entity_Name', [], function(err: Error, results) {
        	// if (err) return next(err);
			res.send(results);
      });
	});
};

export let children = function (req: Request, res: Response, next: any) {
	var name = req.params.name;
	console.log(name);
	req.getConnection(function(err, connection){
			if(err) return next(err);
			connection.query("SELECT * FROM relationships WHERE Parent_Entity_Name = ? ORDER BY Entity_Name", [name], function (err, results) {
				if(err) return next(err);

				res.send(results);
			});
	});
};
