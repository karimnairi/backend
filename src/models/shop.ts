import{Entity , PrimaryGeneratedColumn , Column, BaseEntity} from 'typeorm'
@Entity()
class Shop extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique : true})
    name : String
    @Column()
    servicetype:String
    @Column()
    shopType:string
    



}
export default Shop