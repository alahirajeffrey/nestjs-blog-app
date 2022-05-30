import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BlogEntity } from "../blog/blog.entity";
import { Role } from "./user.role.entity";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    email: string
    
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    password: string

    @Column({type: "enum", default: Role.USER, enum: Role })
    role: Role

    @OneToMany(()=> BlogEntity, (blogEntity)=> blogEntity.author)
    blogPosts : BlogEntity[]
}