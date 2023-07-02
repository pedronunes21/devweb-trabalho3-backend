import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";


@Entity("user")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string

    @Column({ select: false })
    password: string;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}