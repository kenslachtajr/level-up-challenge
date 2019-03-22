import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City, CitiesService } from '@workspace/core-data';
import { group } from '@angular/animations';

@Component({
  selector: 'workspace-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  city: City;
  cities$: Observable<City[]>;
  form: FormGroup;

  constructor(
    private citiesService: CitiesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCities();
    this.initForm();
  }

  selectCity(city: City) {
    this.city = city;
    this.form.patchValue(city);
  }

  getCities() {
    this.cities$ = this.citiesService.get();
  }

  saveCity(city: City) {
    city.id ? this.updateCity(city) : this.createCity(city);
  }

  createCity(city: City) {
    this.citiesService.create(city).subscribe(res => {
      this.reset();
      this.getCities();
    });
  }

  updateCity(city: City) {
    this.citiesService.update(city).subscribe(res => {
      this.reset();
      this.getCities();
    });
  }

  deleteCity(cityId: number) {
    this.citiesService.delete(cityId).subscribe(res => {
      this.reset();
      this.getCities();
    });
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
