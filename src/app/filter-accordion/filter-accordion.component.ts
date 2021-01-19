import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter-accordion',
  templateUrl: './filter-accordion.component.html',
  styleUrls: ['./filter-accordion.component.css']
})
export class FilterAccordionComponent implements OnInit {

  value: number = 0;
  highValue: number = 5000;

  options: Options = {
    floor: 0,
    ceil: 10000,
    stepsArray: [
      { value: 0 },
      { value: 1000 },
      { value: 2000 },
      { value: 3000 },
      { value: 4000 },
      { value: 5000 },
      { value: 6000 },
      { value: 7000 },
      { value: 8000 },
      { value: 9000 },
      { value: 10000 }
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
