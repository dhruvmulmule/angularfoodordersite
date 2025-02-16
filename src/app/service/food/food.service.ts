import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id === id)!;
  }
  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price:350,
        cookTime: '10-20 min',
        favorite:true,
        origins:['Italy'],
        stars:4.5,
        imageUrl:'pizza.png',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id: 2,
        name: 'Pasta Carbonara',
        cookTime: '20-30 min',
        price:250,
        favorite:true,
        origins:['Persia','middle east','china'],
        stars:4.7,
        imageUrl:'pasta1.png',
        tags:['SlowFood','Lunch']
      },
      {
        id: 3,
        name: 'Garlic Bread',
        cookTime: '10-15 min',
        price:100,
        favorite:true,
        origins:['Germany','US'],
        stars:3.5,
        imageUrl:'garlicbread.png',
        tags:['FastFood','Hamburger']
      },
      {
        id: 4,
        name: 'Spaghetti Bolognese',
        cookTime: '20-30 min',
        price:300,
        favorite:true,
        origins:['belgium','france'],
        stars:3.3,
        imageUrl:'Sphagetti.png',
        tags:['FastFood','Fry']
      },
      {
        id: 5,
        name: 'Gnocchi',
        cookTime: '20-30 min',
        price:400,
        favorite:true,
        origins:['Italy'],
        stars:4.6,
        imageUrl:'gnocchi.png',
        tags:['Pasta','Lunch']
      }
      /* 'pizza.png',
      'pasta1.png',
      'garlicbread.png',
      'Sphagetti.png',
      'gnocchi.png' */
    ];
  }
}
