import { Column, Entity } from "typeorm";

@Entity("sleact", { schema: "nestDB" })
export class Sleact {
  @Column("int", { primary: true, name: "idsleact" })
  idsleact: number;
}
