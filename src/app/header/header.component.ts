import { NgModule,Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
