import { Component, OnInit } from '@angular/core';
import { StarWarsFacade } from '@workspace/core-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { StarWars } from '@workspace/core-data';

@Component({
  selector: 'workspace-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {
  starWars$: Observable<StarWars[]> = this.starWarsFacade.allStarWars$;
  starWar$: Observable<StarWars> = this.starWarsFacade.currentStarWars$;
  loading$: Observable<boolean> = this.starWarsFacade.starWarsLoading$;
  form: FormGroup;

  constructor(
    private starWarsFacade: StarWarsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.starWarsFacade.loadStarWars();
    this.starWarsFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectStarWar(starWar: StarWars) {
    this.form.patchValue(starWar);
    this.starWarsFacade.selectStarWars(starWar.id);
  }

  saveStarWar(starWar: StarWars) {
    if (this.form.valid) {
      starWar.id
        ? this.starWarsFacade.updateStarWars(starWar)
        : this.starWarsFacade.addStarWars(starWar);
    }
  }

  deleteStarWar(starWar: StarWars) {
    this.starWarsFacade.deleteStarWars(starWar);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: '',
      gender: '',
      height: [null],
      mass: [null],
      eye_color: '',
      skin_color: '',
      birth_year: '',
      url: ''
    });
  }
}
