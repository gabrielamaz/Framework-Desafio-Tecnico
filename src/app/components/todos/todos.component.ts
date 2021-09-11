import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

import { Todo } from 'src/app/models/Todo';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  users: User[];

  constructor(private todosService: TodosService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos =>{
      this.todos = todos;
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        for (let i=0; i<this.todos.length; i++) {
          this.todos[i].username = this.users.filter(u => u.id === this.todos[i].userId)[0].username
      }
      });
    });
  }

}
