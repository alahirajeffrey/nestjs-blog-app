import { User } from "../users/user.interface"

export interface BlogPost{
    id? : number
    blogTitle : string
    blogPost : string
    createdAt: Date
    author: User
}