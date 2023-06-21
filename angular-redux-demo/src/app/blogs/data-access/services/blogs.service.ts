import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { BlogInterface } from "../types/blog.interface";

@Injectable()
export class BlogsService{
    getBlogs(): Observable<BlogInterface[]>{
        const blogs = [
            { id: 1, title: 'Dog blog', description: 'This a blog which talks about dogs.', author: 'John Doe'},
            { id: 2, title: 'Cat blog', description: 'This a blog which talks about cats.', author: 'John Doe'}
        ]
        return of(blogs).pipe(delay(2000))
    }
}