"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const csvtojson_1 = require("csvtojson");
const Relationships_1 = require("../entity/Relationships");
exports.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
    var converter = new csvtojson_1.Converter({});
    const manager = typeorm_1.getManager().getRepository(Relationships_1.Relationships);
    converter.fromFile("./src/csv/Entity_Relationships.csv", (err, results) => __awaiter(this, void 0, void 0, function* () {
        if (err)
            console.log(err);
        // Delete Relationships table contents to avoid duplicates
        yield manager.query("DELETE FROM relationships");
        console.log("....Inserting new data into the Relationships table....");
        for (let i = 0; i < results.length; i++) {
            let relationship = new Relationships_1.Relationships(), entity = results[i];
            relationship.Parent_Entity_Id = parseInt(entity["Parent Entity Id"]);
            relationship.Parent_Entity_Name = entity["Parent Entity Name"];
            relationship.Relationship_Type = entity["Relationship Type"];
            relationship.Entity_Id = parseInt(entity["Entity Id"]);
            relationship.Entity_Name = entity["Entity Name"];
            manager.save(relationship).then((result) => {
                console.log("Saved with id:", result.id);
            }).catch(error => console.log('Duplicates!'));
        }
    }));
    const data = yield manager.query("SELECT COUNT(*) AS Children_Banks, Parent_Entity_Name, Parent_Entity_Id FROM relationships GROUP BY Parent_Entity_Name, Parent_Entity_Id");
    console.log("Home:", data);
    res.send(data);
});
exports.children = (req, res) => __awaiter(this, void 0, void 0, function* () {
    var id = req.params.id;
    console.log("Name:", id);
    const manager = typeorm_1.getManager().getRepository(Relationships_1.Relationships);
    const data = yield manager.find({ "Parent_Entity_Id": id });
    console.log(data);
    res.send(data);
});
//# sourceMappingURL=home.js.map