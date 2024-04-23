import{Entity , PrimaryGeneratedColumn , Column, BaseEntity} from 'typeorm'



@Entity()
class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number 

    @Column()
    fullname : string 

    @Column({nullable : false , unique : true })
    email :string 

 

}




export default Users