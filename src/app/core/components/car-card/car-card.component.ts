import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Car} from "../../models/car.interface";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnChanges {
  flipCard : boolean = false;

  @Input()
  public car: Car | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    this.flipCard = true;
    setTimeout(() => this.flipCard = !this.flipCard, 1500);
  }
}
