import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/models/blog.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private blogService : BlogService ){}

    @Post()
    createPost(@Body() blogPost: BlogPost ) : Observable<BlogPost>{
        return this.blogService.createPost(blogPost)
    }

    @Get()
    findAllPosts() : Observable<BlogPost[]>{
        return this.blogService.findAllPosts()
    }

    @Get(':id')
    findSinglePost(
        @Param('id') id: number
    ): Observable<BlogPost[]> {
        return this.blogService.findSinglePost(id)
    }

    @Delete(':id')
    deletePost(
        @Param('id') id: number
    ) : Observable<DeleteResult> {
        return this.blogService.deletePost(id)
    }

    @Patch(':id')
    updatePost(
        @Param('id') id : number,
        @Body() blogPost: BlogPost
    ) : Observable<UpdateResult> {
        return this.blogService.updatePost(id, blogPost)
    }
}
