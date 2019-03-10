import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Album, AlbumsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  album: Album;
  albums$: Observable<Album[]>;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
  }

  selectAlbum(album: Album) {
    this.album = album;
  }

  getAlbums() {
    this.albums$ = this.albumsService.get();
  }

  saveAlbum(album: Album) {
    album.id ? this.updateAlbum(album) : this.createAlbum(album);
  }

  createAlbum(album: Album) {
    this.albumsService.create(album).subscribe(res => {
      this.reset();
      this.getAlbums();
    });
  }

  updateAlbum(album: Album) {
    this.albumsService.update(album).subscribe(res => {
      this.reset();
      this.getAlbums();
    });
  }

  deleteAlbum(albumId: number) {
    this.albumsService.delete(albumId).subscribe(res => {
      this.reset();
      this.getAlbums();
    });
  }

  reset() {
    const emptyAlbum: Album = {
      id: null,
      title: '',
      artist: '',
      year: null,
      label: ''
    };
    this.selectAlbum(emptyAlbum);
  }
}
