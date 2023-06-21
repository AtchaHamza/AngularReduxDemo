import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogInterface } from '../../data-access/types/blog.interface';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog!: BlogInterface;
}
