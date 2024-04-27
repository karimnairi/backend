import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Article } from './article';

@Entity()
export class Supplement extends BaseEntity{
  @PrimaryGeneratedColumn()
  idSupplement: number

  @Column()
  nomsupplement: string
  @Column()
  prixSupplement: number
  
  
  @ManyToOne(()=>Article,article =>article.supplements,{eager:true,})
  article:Article

  
}
