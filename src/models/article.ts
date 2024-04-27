import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Categorie } from './categorie';
import { Supplement } from './supplement';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  idArticle: number;

  @Column()
  nomArticle: string;

  @Column()
  description: string;
  @Column()
  prixArticle: number
  @Column()
  DureeArticle: number

  // Many-to-one relationship with Categorie
  @ManyToOne(() => Categorie, categorie => categorie.articles,{eager:true})
  categorie: Categorie
  @OneToMany(()=>Supplement, supplement => supplement.article)
  supplements: Supplement[]

}
