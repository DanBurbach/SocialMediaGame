import { Injectable } from '@angular/core';
import { Userpost } from './userpost.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('userposts');
  }

  getPosts() {
    return this.posts;

  }

  addPost(newPost: Userpost) {
    this.posts.push(newPost);
  }

  getPostById(postId: string) {
    console.log(postId)
    return this.database.object('userposts/' + postId);
    // for ( var i = 0; i <= POSTS.length - 1; i ++) {
    //   if (POSTS[i].id === postId) {
    //     return POSTS[i];
    //   }
    // }
  }

  updatePost(localUpdatedPost){
    var postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    postEntryInFirebase.update({title: localUpdatedPost.title,
                                content: localUpdatedPost.content,
                                category: localUpdatedPost.category});
  }

}
