// angular main import
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// page import components
import { WelcomeComponent } from './welcome/welcome.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'userposts/:id',
    component: PostDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
