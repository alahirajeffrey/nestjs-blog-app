import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity('blog')
export class BlogEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    blogTitle: string

    @Column()
    blogPost: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(()=> UserEntity, (UserEntity)=> UserEntity.id)
    author : UserEntity
}