import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Car} from "../models/car.interface";
import {AngularFireDatabase, SnapshotAction} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private API_URL = '/cars';

  person = {
    name: 'Tomek',
    friends: [
      {name: 'Kasia'},
      {name: 'Basia'},
    ]
  }

  constructor(private db: AngularFireDatabase) { }

  public fetchAllCars(): Observable<Car[]> {
    return this.db.list<Car[]>(this.API_URL).snapshotChanges()
        .pipe(map(response => response.map(car => this.assignKey(car))))
  }

  private assignKey(car: SnapshotAction<any>) {
    return {...car.payload.val(), key: car.key};
  }
}
