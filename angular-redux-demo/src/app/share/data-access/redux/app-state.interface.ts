import { BlogStateInterface } from "src/app/blogs/data-access/types/blog-state.interface";
import { PostStateInterface } from "src/app/posts/data-access/types/post-state.interface";

export interface AppStateInterface {
    blogs: BlogStateInterface,
    posts: PostStateInterface
} 