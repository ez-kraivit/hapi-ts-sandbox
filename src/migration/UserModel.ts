import { Entity, Column , PrimaryColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    lastname2: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}