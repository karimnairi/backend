import { Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity } from 'typeorm';
import { Categorie } from './categorie';
import { Table } from './table';

@Entity()
export class Lieu extends BaseEntity {
  @PrimaryGeneratedColumn()
  idLieu: number

  @Column({unique:true})
  nameLieu: string
  @Column()
  TelLieu :number 
  @Column({unique:true})
  EmailLieu:string
  @Column()
  PassLieu:string
  @Column()
  ServiceType:string







  @OneToMany(() => Categorie, categorie => categorie.lieu)
  categories: Categorie[];

  @OneToMany(() => Table, table => table.lieu)
  table: Table[];


}
