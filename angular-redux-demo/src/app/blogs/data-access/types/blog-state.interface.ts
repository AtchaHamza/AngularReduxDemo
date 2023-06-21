import { BlogInterface } from "./blog.interface"

export interface BlogStateInterface {
    isLoading: boolean
    blogs: BlogInterface[]
    error: string | null 
}