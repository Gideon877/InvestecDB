"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Limits = /** @class */ (function () {
    function Limits() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Limits.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Entity_Id");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Risk_Taker_Group_Name");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Risk_Taker_Name");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Facility_Id");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Facility_Type");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Limit_Id");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Limit_Type");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Product");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Risk_Type");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Currency");
    __decorate([
        typeorm_1.Column("double")
    ], Limits.prototype, "Exposure_Amount");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Total_Current_Limit");
    __decorate([
        typeorm_1.Column()
    ], Limits.prototype, "Total_Approved_Limit");
    Limits = __decorate([
        typeorm_1.Entity()
    ], Limits);
    return Limits;
}());
exports.Limits = Limits;
