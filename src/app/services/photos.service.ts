import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  albumsUrl: string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.albumsUrl);
  }

  getPhoto(id: number): Observable<Photo> {
    const url = `${this.albumsUrl}/${id}`; 
    return this.http.get<Photo>(url);
  }

}
