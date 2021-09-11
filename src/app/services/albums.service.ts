import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums'

  constructor(private http:HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`; 
    return this.http.get<Album>(url);
  }

}
