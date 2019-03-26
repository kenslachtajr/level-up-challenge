import { Component, OnInit } from '@angular/core';
import { PaintersFacade } from '@workspace/core-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Painter } from '@workspace/core-data';

@Component({
  selector: 'workspace-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.scss']
})
export class PaintersComponent implements OnInit {
  painters$: Observable<Painter[]> = this.paintersFacade.allPainters$;
  painter$: Observable<Painter> = this.paintersFacade.currentPainter$;
  loading$: Observable<boolean> = this.paintersFacade.paintersLoading$;
  form: FormGroup;

  constructor(
    private paintersFacade: PaintersFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.paintersFacade.loadPainters();
    this.paintersFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectPainter(painter: Painter) {
    this.form.patchValue(painter);
    this.paintersFacade.selectPainter(painter.id);
  }

  savePainter(painter: Painter) {
    if (this.form.valid) {
      painter.id ? this.paintersFacade.updatePainter(painter) : this.paintersFacade.addPainter(painter);
    }
  }

  deletePainter(painter: Painter) {
    this.paintersFacade.deletePainter(painter);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: '',
      era: '',
      yearsLived: [null],
      datesLived: [null],
      work: ''
    });
  }
}
