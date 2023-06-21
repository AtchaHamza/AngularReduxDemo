import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PostInterface } from '../../data-access/types/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PostItemComponent {
  @Input() post!: PostInterface
}
