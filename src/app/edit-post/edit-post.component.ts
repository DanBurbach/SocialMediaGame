import { Component, OnInit, Input } from '@angular/core';
import { Userpost } from '../userpost.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  @Input() selectedPost;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  beginUpdatingPost(postToUpdate) {
    this.postService.updatePost(postToUpdate);
  }

}
