import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musician, JazzService } from '@workspace/core-data';

@Component({
  selector: 'workspace-jazz',
  templateUrl: './jazz.component.html',
  styleUrls: ['./jazz.component.scss']
})
export class JazzComponent implements OnInit {
  musician: Musician;
  musicians$: Observable<Musician[]>;

  constructor(private jazzService: JazzService) {}

  ngOnInit() {
    this.getMusicians();
  }

  selectMusician(musician: Musician) {
    this.musician = musician;
  }

  getMusicians() {
    this.musicians$ = this.jazzService.get();
  }

  saveMusician(musician: Musician) {
    musician.id ? this.updateMusician(musician) : this.createMusician(musician);
  }
  
  createMusician(musician: Musician) {
    this.jazzService.create(musician).subscribe(res => {
      this.reset();
      this.getMusicians();
    });
  }
  
  updateMusician(musician: Musician) {
    this.jazzService.update(musician).subscribe(res => {
      this.reset();
      this.getMusicians();
    });
  }

  deleteMusician(musicianId: number) {
    this.jazzService.delete(musicianId).subscribe(res => {
      this.reset();
      this.getMusicians();
    });
  }

  reset() {
    const emptyMusician: Musician = {
      id: null,
      name: '',
      instrument: '',
      style: '',
      year: null
    };
    this.selectMusician(emptyMusician);
  }
}
