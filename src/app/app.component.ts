import { NgModule,Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodmine-course';
  constructor() {}

  ngOnInit() {}
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
    New Value: ${$event.newValue},
    Checked Color: ${$event.starRating.checkedcolor},
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  
}
