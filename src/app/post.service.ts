import { Injectable } from '@angular/core';
import { Userpost } from './userpost.model';
import { POSTS } from './mock-posts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  userposts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.userposts = database.list('userposts');
  }

  getPosts() {
    return this.userposts;

  }

  getPostById(postId: number) {
    for ( var i = 0; i <= POSTS.length - 1; i ++) {
      if (POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }

}
