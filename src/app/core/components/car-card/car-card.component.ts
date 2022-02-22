import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../models/car.interface";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input()
  public car: Car = this.prepareDefaultCar();

  constructor() { }

  ngOnInit(): void {
  }

  private prepareDefaultCar(): Car {
    return {
      brand: 'Audi',
      model: 'RS7',
      year: '2020',
      engine: 2.0,
      fuel: 'petrol',
      plateNumber: 'LU 125SE',
      photoSource: 'https://www.szkolaangulara.pl/wp-content/uploads/2020/05/3-small.jpeg'
    };
  }
}
