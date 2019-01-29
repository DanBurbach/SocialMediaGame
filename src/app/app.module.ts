// angular core imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

// module imports
import { NgModule } from '@angular/core';

// declarations here
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostComponent,
    FeedComponent,
    PostDetailComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
