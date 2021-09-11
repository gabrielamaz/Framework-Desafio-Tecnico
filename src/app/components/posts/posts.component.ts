import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  users: User[];


  constructor(private postService: PostService, private userService: UsersService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        for (let i=0; i<this.posts.length; i++) {
          this.posts[i].username = this.users.filter(u => u.id === this.posts[i].userId)[0].username
          this.posts[i].hide = true;
      }
      });
    });
  }

  postHide(post: Post) {
    post.hide = !post.hide;
  }

}
