import { Component, OnInit } from '@angular/core';
import { AlbumsFacade } from '@workspace/core-state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]> = this.albumsFacade.allAlbums$;
  album$: Observable<Album> = this.albumsFacade.currentAlbum$;
  loading$: Observable<boolean> = this.albumsFacade.albumsLoading$;
  form: FormGroup;

  constructor(
    private albumsFacade: AlbumsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.albumsFacade.loadAlbums();
    this.albumsFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectAlbum(album: Album) {
    this.form.patchValue(album);
    this.albumsFacade.selectAlbum(album.id);
  }

  saveAlbum(album: Album) {
    if (this.form.valid) {
      album.id ? this.albumsFacade.updateAlbum(album) : this.albumsFacade.addAlbum(album);
    }
  }

  deleteAlbum(album: Album) {
    this.albumsFacade.deleteAlbum(album);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      artist: ['', Validators.required],
      year: [null],
      label: ['']
    });
  }
}
