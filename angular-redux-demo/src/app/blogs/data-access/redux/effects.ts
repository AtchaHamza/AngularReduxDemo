import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogsService } from '../services/blogs.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as BlogsActions from './actions';

@Injectable() 
export class BlogsEffects {
  getBlogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogsActions.getBlogs),
      mergeMap(() => {
        return this.blogsService.getBlogs().pipe(
          map((blogs) => BlogsActions.getBlogsSuccess({ blogs })),
          catchError((error) =>
            of(BlogsActions.getBlogsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private blogsService: BlogsService) {}
}
