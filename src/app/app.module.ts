import { BrowserModule } from "@angular/platform-browser";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import {RatingModule, StarRatingComponent} from 'ng-starrating';
import {FormsModule} from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        HomeComponent,
        StarRatingComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        RatingModule,
        FormsModule
    ],
    providers: [],
    
    bootstrap: [AppComponent]
})

export class AppModule {}