import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Slider } from 'ui/slider';

@Component({
  selector: 'app-slider',
  moduleId: module.id,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  lines: any = [];
  sliderValue: number;
  @Input()
  sliderLabel = '';
  @Input()
  unit = '';
  @Input()
  sliderRange: number[];
  @Output()
  updateSliderValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.sliderValue = 0;
    this.sliderRange = [0, 100];
    this.lines = Array.from({ length: 9 });
  }

  ngOnInit(): void {
    this.sliderValue = this.sliderRange[0];
  }

  reloadSlider() {
    this.sliderValue = this.sliderRange[0];
  }

  onSliderValueChange(args) {
    let slider = <Slider>args.object;
    this.sliderValue = slider.value;
    this.updateSliderValue.emit(this.sliderValue);
  }
}
