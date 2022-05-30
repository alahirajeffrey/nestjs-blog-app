import { User } from "../users/user.interface"

export interface BlogPost{
    id? : string
    blogTitle : string
    blogPost : string
    createdAt: Date
    author: User
}