import {Injectable} from '@angular/core';
import {delay, Observable} from "rxjs";
import {Car} from "../models/car.interface";
import {HttpService} from "../../shared/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpService: HttpService) { }

  public fetchAllCars(): Observable<Car[]> {
    return this.httpService.get<Car[]>('/cars/all')
                          .pipe(delay(1000));
  }
}
