import { BlogPost } from "../blog/blog.interface";
import { Role } from "./user.role.entity";

export interface User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role
    blogPosts: BlogPost[]
}