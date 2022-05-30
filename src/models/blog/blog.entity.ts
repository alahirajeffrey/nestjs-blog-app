import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('blog')
export class BlogEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    blogTitle: string

    @Column()
    blogPost: string

    @Column({type: 'timestamp',  default : ()=>'CURRENT_TIMESTAMP'})
    createdAt: Date
}