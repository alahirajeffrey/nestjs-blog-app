import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { BlogEntity } from 'src/models/blog/blog.entity';
import { BlogPost } from 'src/models/blog/blog.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private readonly blogRepository: Repository<BlogEntity>
    ){}

    createPost(blogPost: BlogPost) : Observable <BlogPost> {
        return from(this.blogRepository.save(blogPost)) 
    }

    findAllPosts() : Observable <BlogPost[]> {
        return from(this.blogRepository.find())
    }

    findSinglePost(id: number) : Observable <BlogPost[]>{
        return from(this.blogRepository.findByIds([id]))
    }

    deletePost(id: number) : Observable <DeleteResult> {
        return from(this.blogRepository.delete(id))
    }

    updatePost(id: number, blogPost: BlogPost) : Observable <UpdateResult>{
        return from(this.blogRepository.update(id, blogPost))
    }
}
