import { Component } from '@angular/core';
import { Userpost } from '../userpost.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  constructor(private router: Router){}

  userposts: Userpost[] = [
    new Userpost("Cat Marries Pig", "Guess what, you guessed right! It happened again, another cat in Sussex has married a pig of 12 years its senior!", "Odds 'n Ends", 1),
    new Userpost("Nothing new, just creative", "An interviewee just commented that while she is extremely creative, it takes several cups of coffee and a shot of bourbon to continue. News at 11.", "Local News", 2),
    new Userpost("Sportsball on the rise", "To further the explosion of sportsball, the team the 'Mad Hatters' has included dodge ball in their competitive play", "Sports", 3)
  ];

  goToDetailPage(clickedPost: Userpost){
    this.router.navigate(['userposts', clickedPost.id]);
  };
}
