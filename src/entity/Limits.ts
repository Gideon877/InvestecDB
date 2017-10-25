import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Limits {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Entity_Id: number;

    @Column()
    Risk_Taker_Group_Name: string;

    @Column()
    Risk_Taker_Name: string;

    @Column()
    Facility_Id: number;

    @Column()
    Facility_Type: string;

    @Column()
    Limit_Id: number;

    @Column()
    Limit_Type: string;

    @Column()
    Product: string;

    @Column()
    Risk_Type: string;

    @Column()
    Currency: string;

    @Column("double")
    Exposure_Amount: number;

    @Column()
    Total_Current_Limit: number;

    @Column()
    Total_Approved_Limit: number;
}
