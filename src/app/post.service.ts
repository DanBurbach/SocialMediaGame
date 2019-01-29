import { Injectable } from '@angular/core';
import { Userpost } from './userpost.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('appleposts');
  }

  getPosts() {
    return this.posts;

  }

  addPost(newPost: Userpost) {
    this.posts.push(newPost);
  }

  getPostById(postId: number) {
    // for ( var i = 0; i <= POSTS.length - 1; i ++) {
    //   if (POSTS[i].id === postId) {
    //     return POSTS[i];
    //   }
    // }
  }

}
