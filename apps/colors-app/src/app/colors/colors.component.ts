import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color, ColorsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  color: Color;
  colors$: Observable<Color[]>;

  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.getColors();
  }

  selectColor(color: Color) {
    this.color = color;
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
    const emptyColor: Color = {
      id: null,
      color: '',
      category: '',
      type: '',
      code: {
        rgba: [],
        hex: ''
      }
    };
    this.selectColor(emptyColor);
  }
}
