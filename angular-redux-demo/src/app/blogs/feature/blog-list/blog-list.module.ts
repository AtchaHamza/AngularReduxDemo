import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../../data-access/redux/reducers';
import { BlogsEffects } from '../../data-access/redux/effects';
import { BlogListComponent } from './blog-list.component';
import { BlogsService } from '../../data-access/services/blogs.service';
import { BlogItemComponent } from '../../ui/blog-item/blog-item.component';
import { FormsModule } from '@angular/forms';
import { BlogFilterPipe } from '../../data-access/services/blog-filter.pipe';
@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    FormsModule,
    BlogFilterPipe,
    BlogItemComponent,
    StoreModule.forFeature('blogs', reducers),
    EffectsModule.forFeature([BlogsEffects]),
  ],
  exports: [BlogListComponent],
  providers: [BlogsService]
})
export class BlogListModule { }
