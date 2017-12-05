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
const Relationships_1 = require("../entity/Relationships");
exports.share = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const manager = typeorm_1.getManager().getRepository(Relationships_1.Relationships);
    const data = yield manager.query("SELECT COUNT(*) AS Share_Count, Relationship_Type FROM relationships GROUP BY Relationship_Type");
    // console.log(data)
    res.send(data);
});
exports.type = (req, res) => __awaiter(this, void 0, void 0, function* () {
    var id = req.params.type;
    const manager = typeorm_1.getManager().getRepository(Relationships_1.Relationships);
    const data = yield manager.find({
        "Relationship_Type": id
    });
    // console.log(data)
    res.send(data);
});
//# sourceMappingURL=share.js.map