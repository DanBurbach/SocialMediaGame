// angular core imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

// module imports
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// declarations here
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewpostComponent } from './newpost/newpost.component';
import { EditPostComponent } from './edit-post/edit-post.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostComponent,
    FeedComponent,
    PostDetailComponent,
    NewpostComponent,
    EditPostComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
