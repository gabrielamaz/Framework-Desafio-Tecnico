import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { PostService } from './services/post.service';
import { AlbumsService } from './services/albums.service';
import { TodosService } from './services/todos.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    PostDetailsComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    AlbumsService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
