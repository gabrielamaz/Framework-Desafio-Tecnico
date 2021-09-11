import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

import { Album } from 'src/app/models/Album';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  users: User[];

  constructor(private albumsService : AlbumsService, private userService: UsersService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums =>{
      this.albums = albums;
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        for (let i=0; i<this.albums.length; i++) {
          this.albums[i].username = this.users.filter(u => u.id === this.albums[i].userId)[0].username
      }
      });
    });
  }

}
