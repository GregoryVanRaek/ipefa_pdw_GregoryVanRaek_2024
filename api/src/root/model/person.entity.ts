import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
export class Person {
  @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` }) // méthode à trouver pour autoincrémenter soi même l'ulid
  person_id: string;
  @Column({nullable: true})
  firstname: string;
  @Column({nullable: true})
  lastname: string;
  @Column({nullable: true})
  gender: string;
  @Column({nullable: true})
  birthdate: Date;
}