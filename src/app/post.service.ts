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
    return this.database.object('userposts/' + postId);
  }

  updatePost(localUpdatedPost){
    var postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    postEntryInFirebase.update({title: localUpdatedPost.title,
                                content: localUpdatedPost.content,
                                category: localUpdatedPost.category});
  }

  deletePost(localPostToDelete){
    var postEntryInFirebase = this.getPostById(localPostToDelete.$key);
    postEntryInFirebase.remove();
  }

}
