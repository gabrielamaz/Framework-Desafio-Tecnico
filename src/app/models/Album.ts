import { Photo } from "./Photo";

export interface Album {
  id: number,
  userId: number,
  username: string,
  title: string,
  photos: Photo[]
}