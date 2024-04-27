import { Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity, ManyToOne } from 'typeorm';
import { Categorie } from './categorie';
import { Lieu } from './lieu';

@Entity()
export class Table extends BaseEntity {
  @PrimaryGeneratedColumn()
  idTable: number

  @Column()
  numTable: string
  @ManyToOne(()=>Lieu,lieu=> lieu.table,{eager:true})
  lieu: Lieu[]
}
