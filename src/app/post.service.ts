import { Injectable } from '@angular/core';
import { Userpost } from './userpost.model';
import { POSTS } from './mock-posts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { }

  getPosts() {
    return POSTS;
  }

  getPostById(postId: number) {
    for ( var i = 0; i <= POSTS.length - 1; i ++) {
      if (POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }

}
