import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostsEffects } from '../../data-access/redux/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../data-access/redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsService } from '../../data-access/services/posts.service';
import { PostItemComponent } from '../../ui/post-item/post-item.component';

@NgModule({
  declarations: [
    PostListComponent 
  ],
  imports: [
    CommonModule,
    PostItemComponent,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsService],
  exports: [PostListComponent]
})
export class PostListModule { }
