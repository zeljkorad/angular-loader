import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any;
  loadingMessage: any;
  errorMessage: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.loadingMessage = true;

    this.postsService.getAllPosts()
      .subscribe((data: any) => {
        this.posts = data;
        this.loadingMessage = false;
      },
        (err: any) => {
          this.errorMessage = "There are no posts pulled from the server!";
          this.loadingMessage = false;
        })
  }

}
