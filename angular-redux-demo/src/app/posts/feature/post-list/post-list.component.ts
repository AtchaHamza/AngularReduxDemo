import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/share/data-access/redux/app-state.interface';
import { PostInterface } from '../../data-access/types/post.interface';
import { errorSelector, isLoadingSelector, postsSelector } from '../../data-access/redux/selectors';
import { ActivatedRoute } from '@angular/router';
import * as PostsAction from '../../data-access/redux/actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy{
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  posts$: Observable<PostInterface[]>

  constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.posts$ = this.store.pipe(select(postsSelector))
  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.store.dispatch(PostsAction.getPosts({id:id}))
    });
  }
}
