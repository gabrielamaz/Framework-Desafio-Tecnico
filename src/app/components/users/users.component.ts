import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
    });
  }

  getUserNameById(id: number): string{
    for(let user of this.users){
      if(user.id == id){
        return user.username;
      }
    }
    return null as any
  }
}
