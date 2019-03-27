import { Component, OnInit } from '@angular/core';
import { LiteratureFacade } from '@workspace/core-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Literature } from '@workspace/core-data';

@Component({
  selector: 'workspace-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.scss']
})
export class LiteratureComponent implements OnInit {
  literatures$: Observable<Literature[]> = this.literatureFacade.allLiterature$;
  literature$: Observable<Literature> = this.literatureFacade.currentLiterature$;
  loading$: Observable<boolean> = this.literatureFacade.literatureLoading$;
  form: FormGroup;

  constructor(
    private literatureFacade: LiteratureFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.literatureFacade.loadLiterature();
    this.literatureFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectLiterature(literature: Literature) {
    this.form.patchValue(literature);
    this.literatureFacade.selectLiterature(literature.id);
  }

  saveLiterature(literature: Literature) {
    if (this.form.valid) {
      literature.id ? this.literatureFacade.updateLiterature(literature) : this.literatureFacade.addLiterature(literature);
    }
  }

  deleteLiterature(literature: Literature) {
    this.literatureFacade.deleteLiterature(literature);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      author: '',
      work: '',
      era: '',
      lived: [null]
    });
  }
}
