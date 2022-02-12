import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  showMainLayoutSource$ = new Subject<boolean>();

  showMainLayout(): void {
    this.showMainLayoutSource$.next(true);
  }

  hideMainLayout(): void {
    this.showMainLayoutSource$.next(false);
  }
}
