import { Component, OnInit } from '@angular/core';
import { CitiesFacade } from '@workspace/core-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { City } from '@workspace/core-data';

@Component({
  selector: 'workspace-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities$: Observable<City[]> = this.citiesFacade.allCities$;
  city$: Observable<City> = this.citiesFacade.currentCity$;
  loading$: Observable<boolean> = this.citiesFacade.citiesLoading$;
  form: FormGroup;

  constructor(
    private citiesFacade: CitiesFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.citiesFacade.loadCities();
    this.citiesFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectCity(city: City) {
    this.form.patchValue(city);
    this.citiesFacade.selectCity(city.id);
  }

  saveCity(city: City) {
    if (this.form.valid) {
      city.id ? this.citiesFacade.updateCity(city) : this.citiesFacade.addCity(city);
    }
  }

  deleteCity(city: City) {
    this.citiesFacade.deleteCity(city);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: '',
      state: '',
      population: [null],
      nickname: ''
    });
  }
}
