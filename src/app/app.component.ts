import { Component } from '@angular/core';
import {LayoutService} from "./shared/services/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'letsDrive-app';
  isMainLayoutVisible: boolean = false;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.showMainLayoutSource$.subscribe(
      (isVisible) => this.isMainLayoutVisible = isVisible
    );
  }
}
