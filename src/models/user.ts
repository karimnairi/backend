import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  idUser: number

  @Column()
  NameUser: string
  @Column({unique:true})
  Email: string
  @Column()
  PasswordUser: string

  

  
}
