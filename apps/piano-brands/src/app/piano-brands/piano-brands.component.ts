import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Piano, PianoBrandsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-piano-brands',
  templateUrl: './piano-brands.component.html',
  styleUrls: ['./piano-brands.component.scss']
})
export class PianoBrandsComponent implements OnInit {
  piano: Piano;
  pianos$: Observable<Piano[]>;

  constructor(private pianoBrandsService: PianoBrandsService) {}

  ngOnInit() {
    this.getPianos();
  }

  selectPiano(piano: Piano) {
    this.piano = piano;
  }

  getPianos() {
    this.pianos$ = this.pianoBrandsService.get();
  }

  savePiano(piano: Piano) {
    piano.id ? this.updatePiano(piano) : this.createPiano(piano);
  }

  createPiano(piano: Piano) {
    this.pianoBrandsService.create(piano).subscribe(res => {
      this.reset();
      this.getPianos();
    });
  }

  updatePiano(piano: Piano) {
    this.pianoBrandsService.update(piano).subscribe(res => {
      this.reset();
      this.getPianos();
    });
  }

  deletePiano(pianoId: number) {
    this.pianoBrandsService.delete(pianoId).subscribe(res => {
      this.reset();
      this.getPianos();
    });
  }

  reset() {
    const emptyPiano: Piano = {
      id: null,
      name: '',
      website: '',
      yearStarted: '',
      rating: null
    };
    this.selectPiano(emptyPiano);
  }
}
