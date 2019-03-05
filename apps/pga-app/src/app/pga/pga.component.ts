import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Golfer, PgaService } from '@workspace/core-data';

@Component({
  selector: 'workspace-pga',
  templateUrl: './pga.component.html',
  styleUrls: ['./pga.component.scss']
})
export class PgaComponent implements OnInit {
  golfer: Golfer;
  golfer$: Observable<Golfer[]>;

  constructor(private pgaService: PgaService) {}

  ngOnInit() {
    this.getGolfers();
  }

  selectGolfer(golfer: Golfer) {
    this.golfer = golfer;
  }

  getGolfers() {
    this.golfer$ = this.pgaService.get();
  }

  saveGolfer(golfer: Golfer) {
    golfer.id ? this.updateGolfer(golfer) : this.createGolfer(golfer);
  }

  createGolfer(golfer: Golfer) {
    this.pgaService.create(golfer).subscribe(res => {
      this.reset();
      this.getGolfers();
    });
  }

  updateGolfer(golfer: Golfer) {
    this.pgaService.update(golfer).subscribe(res => {
      this.reset();
      this.getGolfers();
    });
  }

  deleteGolfer(golferId: number) {
    this.pgaService.delete(golferId).subscribe(res => {
      this.reset();
      this.getGolfers();
    });
  }

  reset() {
    const emptyGolfer: Golfer = {
      id: null,
      name: '',
      caddy: '',
      majorWins: null,
      age: null
    };
    this.selectGolfer(emptyGolfer);
  }
}
