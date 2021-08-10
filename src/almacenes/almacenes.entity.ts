import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cat_art")
export class AlmacenesEntity {

    @PrimaryColumn({name:"co_cat"})
    readonly CoCat: string;

    
    @Column({name:"cat_des"})
    readonly CatDes: string;

}
