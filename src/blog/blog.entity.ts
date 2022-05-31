import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

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

}