import { NgModule,Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [SearchComponent,CommonModule,RouterLink],
  schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'foodmine-course';
  foods: Food[] = [];
  constructor(private foodService: FoodService,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }else
        this.foods = this.foodService.getAll();
      
    }   ) 
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
    New Value: ${$event.newValue},
    Checked Color: ${$event.starRating.checkedcolor},
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
