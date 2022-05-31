import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { BlogEntity } from 'src/blog/blog.entity';
import { from, Observable } from 'rxjs';
import { BlogPost } from './blog.interface';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private readonly blogRepository: Repository<BlogEntity>
    ){}

    async createBlog(blogPost: BlogPost) : Promise <BlogPost> {
        return await this.blogRepository.save(blogPost) 
    }

    async findAllBlogPosts() : Promise<BlogPost[]>{
        return await this.blogRepository.find()
    }

    async deleteBlog(id: number){
        return await from(this.blogRepository.delete(id))
    }

    async updateBlog(id: number, blogPost: BlogPost) : Promise<UpdateResult>{
        return await this.blogRepository.update(id, blogPost)
    }
}
