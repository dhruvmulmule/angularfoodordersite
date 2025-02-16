import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchTerm', component: HomeComponent},
    {path:'food/:id',component:FoodPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }