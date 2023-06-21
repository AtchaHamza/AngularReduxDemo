import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogInterface } from '../../data-access/types/blog.interface';
import { AppStateInterface } from 'src/app/share/data-access/redux/app-state.interface';
import { Store, StoreModule, select } from '@ngrx/store';
import { blogsSelector, errorSelector, isLoadingSelector } from '../../data-access/redux/selectors';
import * as BlogsAction from '../../data-access/redux/actions';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit{
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  blogs$: Observable<BlogInterface[]>

  blogSearchText: string = ''

  constructor(private store: Store<AppStateInterface>, private router: Router){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.blogs$ = this.store.pipe(select(blogsSelector))
  }

  ngOnInit(): void {
    console.log("blogs")
    this.store.dispatch(BlogsAction.getBlogs())
  }

  viewPosts(id: number){
    this.router.navigate(['posts/', id]);
  }
}
