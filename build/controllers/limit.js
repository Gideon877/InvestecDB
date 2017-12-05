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
const csvtojson_1 = require("csvtojson");
const typeorm_1 = require("typeorm");
const Limits_1 = require("../entity/Limits");
exports.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
    var converter = new csvtojson_1.Converter({});
    const manager = typeorm_1.getManager().getRepository(Limits_1.Limits);
    converter.fromFile("./src/csv/Entity_Limits.csv", (err, results) => __awaiter(this, void 0, void 0, function* () {
        if (err)
            console.log(err);
        yield manager.query("DELETE FROM limits");
        console.log("Deleted All Existing Data from Limits table.");
        console.log("Inserting new data into the Limits table....");
        for (let i = 0; i < results.length; i++) {
            let limit = new Limits_1.Limits(), entity = results[i];
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
            manager.save(limit).then((result) => {
                console.log("Saved with id:", result.id);
            }).catch(error => console.log('Duplicates!'));
        }
        console.log("Entity Limits table data saved.");
    }));
    const data = yield manager.find();
    res.send(data);
});
exports.getId = (req, res) => __awaiter(this, void 0, void 0, function* () {
    var id = req.params.id;
    console.log("Entity_Id:", id);
    const manager = typeorm_1.getManager().getRepository(Limits_1.Limits);
    const data = yield manager.find({ "Entity_Id": id });
    res.send(data);
});
//# sourceMappingURL=limit.js.map