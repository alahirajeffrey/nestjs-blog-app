import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BlogPost } from './blog.interface';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private blogService : BlogService ){}

    @Post()
    async createPost(@Body() blogPost: BlogPost ) : Promise<BlogPost>{
        return await this.blogService.createBlog(blogPost)
    }

    @Get()
    async findAllBlogPosts() : Promise<BlogPost[]>{
        return await this.blogService.findAllBlogPosts()
    }

    @Delete(':id')
    async deletePost(
        @Param('id') id: number
    )
    {   
        return await this.blogService.deleteBlog(id)
    }

    @Patch(':id')
    updatePost(
        @Param('id') id : number,
        @Body() blogPost: BlogPost
    ) : Promise<UpdateResult> {
        return this.blogService.updateBlog(id, blogPost)
    }
}
