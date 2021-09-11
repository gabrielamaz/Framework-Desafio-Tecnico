import { Post } from "./Post";
import { Album } from "./Album";
import { Todo } from "./Todo";

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  posts: Post[],
  todos: Todo[],
  albums: Album[]
}