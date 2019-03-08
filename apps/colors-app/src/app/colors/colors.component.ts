import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Color, ColorsService } from '@workspace/core-data';
import { group } from '@angular/animations';

@Component({
  selector: 'workspace-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  color: Color;
  colors$: Observable<Color[]>;
  form: FormGroup;

  constructor(
    private colorsService: ColorsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getColors();
    this.initForm();
  }

  selectColor(color: Color) {
    this.color = color;
    this.form.patchValue(color);
  }

  getColors() {
    this.colors$ = this.colorsService.get();
  }

  saveColor(color: Color) {
    color.id ? this.updateColor(color) : this.createColor(color);
  }

  createColor(color: Color) {
    this.colorsService.create(color).subscribe(res => {
      this.reset();
      this.getColors();
    });
  }

  updateColor(color: Color) {
    this.colorsService.update(color).subscribe(res => {
      this.reset();
      this.getColors();
    });
  }

  deleteColor(colorId: number) {
    this.colorsService.delete(colorId).subscribe(res => {
      this.reset();
      this.getColors();
    });
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      color: '',
      category: '',
      type: '',
      hex: ''
    });
  }
}
