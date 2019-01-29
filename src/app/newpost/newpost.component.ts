import { Component} from '@angular/core';
import { PostService } from '../post.service';
import { Userpost } from '../userpost.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
  providers: [PostService]
})
export class NewpostComponent {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, content: string, category: string) {
    var newPost: Userpost = new Userpost(title, content, category);
    this.postService.addPost(newPost);
  }

}
