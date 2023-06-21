import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  dogPosts = [
    { id: 1, title: 'Dog Post 1', description: 'Dogs a great because I said so.'},
    { id: 2, title: 'Dog Post 2', description: 'Dogs are bad I dont know why'}
  ]
  catPosts = [
    { id: 1, title: 'Cat Post 1', description: 'Cats a great because I said so.'},
    { id: 2, title: 'Cat Post 2', description: 'Cats are bad I dont know why'}
  ]

  getPosts(id: number): Observable<PostInterface[]>{
    if (id === 1)
      return of(this.dogPosts).pipe(delay(2000))
    if (id === 2)
      return of(this.catPosts).pipe(delay(2000))

    return of([]).pipe(delay(2000))
  }

}
