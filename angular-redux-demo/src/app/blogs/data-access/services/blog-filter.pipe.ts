import { Pipe, PipeTransform } from '@angular/core';
import { BlogInterface } from '../types/blog.interface';

@Pipe({
  name: 'blogFilter',
  standalone: true
})
export class BlogFilterPipe implements PipeTransform {

  transform(blogs: BlogInterface[] | null, searchText: string): BlogInterface[] { 
    if (!blogs) return []
    if (!searchText) return blogs
    searchText = searchText.toLowerCase()

    return blogs.filter( it => {
      return it.title.toLowerCase().includes(searchText)
    })
  }

}
