import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Lieu } from './lieu';
import { Article } from './article';
import { unique } from 'next/dist/build/utils';

@Entity()
export class Categorie extends BaseEntity{
  @PrimaryGeneratedColumn()
  idCategorie: number;

  @Column()
  nameCategorie: string;

  // Many-to-one relationship with Lieu (Cafe)
  @ManyToOne(() => Lieu, lieu => lieu.categories,{eager:true})
  lieu: Lieu

  @OneToMany(() => Article, article => article.categorie)
  articles: Article;
}
