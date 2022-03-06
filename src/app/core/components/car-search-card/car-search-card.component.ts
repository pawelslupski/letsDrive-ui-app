import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-car-search-card',
  templateUrl: './car-search-card.component.html',
  styleUrls: ['./car-search-card.component.scss']
})
export class CarSearchCardComponent {
  plateNumber: string | undefined
  @Output() chosenPlateNumber = new EventEmitter<string>();

  sendPlateNumber() : void {
    this.chosenPlateNumber.emit(this.plateNumber);
  }
}
