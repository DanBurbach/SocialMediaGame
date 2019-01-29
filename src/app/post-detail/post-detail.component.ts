import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Userpost } from '../userpost.model';
import { PostService} from '../post.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {
  postId: number;
  postToDisplay: Userpost;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
    this.postToDisplay = this.postService.getPostById(this.albumId);
  }

}
