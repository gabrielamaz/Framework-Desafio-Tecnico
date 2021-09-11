import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumsService } from 'src/app/services/albums.service';
import { PhotosService } from 'src/app/services/photos.service';

import { Album } from 'src/app/models/Album';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService,
    private photoService: PhotosService,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumService.getAlbum(id).subscribe(album => {
       this.album = album;
       this.photoService.getPhotos().subscribe(photos => {
         this.photos = photos.filter(u => u.albumId == this.album.id);
        });
       });
    }

}
