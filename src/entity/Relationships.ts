import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Relationships {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Parent_Entity_Id: number;

    @Column()
    Parent_Entity_Name: string;

    @Column()
    Relationship_Type: string;

    @Column()
    Entity_Id: number;

    @Column()
    Entity_Name: string;

}
