import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Opera, OperasService } from '@workspace/core-data';

@Component({
  selector: 'workspace-operas',
  templateUrl: './operas.component.html',
  styleUrls: ['./operas.component.scss']
})
export class OperasComponent implements OnInit {
  opera: Opera;
  operas$: Observable<Opera[]>;

  constructor(private operasService: OperasService) {}

  ngOnInit() {
    this.getOperas();
  }

  selectOpera(opera: Opera) {
    this.opera = opera;
  }

  getOperas() {
    this.operas$ = this.operasService.get();
  }

  saveOpera(opera: Opera) {
    opera.id ? this.updateOpera(opera) : this.createOpera(opera);
  }

  createOpera(opera: Opera) {
    this.operasService.create(opera).subscribe(res => {
      this.reset();
      this.getOperas();
    });
  }

  updateOpera(opera: Opera) {
    this.operasService.update(opera).subscribe(res => {
      this.reset();
      this.getOperas();
    });
  }

  deleteOpera(operaId: number) {
    this.operasService.delete(operaId).subscribe(res => {
      this.reset();
      this.getOperas();
    });
  }

  reset() {
    const emptyOpera: Opera = {
      id: null,
      title: '',
      composer: '',
      yearWritten: '',
      language: ''
    };
    this.selectOpera(emptyOpera);
  }
}
