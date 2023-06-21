import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blogs/feature/blog-list/blog-list.component';
import { PostListComponent } from './posts/feature/post-list/post-list.component';

const routes: Routes = [
  { component: BlogListComponent, path: '' },
  { component: PostListComponent, path: 'posts/:id' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
