import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../models/car.interface";
import {Destroyable} from "../destroyable";
import {map, takeUntil} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent extends Destroyable implements OnInit {
  private cars: Car[] | undefined;
  searchedCar: Car | undefined;
  plateNumber: string | undefined;

  constructor(private carsService: CarsService) {
    super();
  }

  public ngOnInit(): void {
    this.fetchAllCars();
  }

  private fetchAllCars() {
    this.carsService.fetchAllCars()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((cars: Car[]) => {
        this.cars = cars
      });
  }

  findCarByPlateNumber(plateNumber: string) {
    return this.carsService.fetchAllCars()
      .pipe(
        map((cars: Car[]) => cars.find((car: Car) => car.plateNumber === plateNumber))
      ).subscribe(car => this.searchedCar = car);
  }
}
