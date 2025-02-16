import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food'; 
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../service/food/food.service';


@Component({
  selector: 'app-food-page',
  imports: [],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
  
  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,private foodservice:FoodService) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodservice.getFoodById(params['id']);
  })
}

  ngOnInit(): void {
 
  }

}
