import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './restaurants/restaurant-details/restaurant-details.component'
import { RestaurantsService } from './restaurants/restaurants.service'
import { SorryMessageComponent } from './sorry-message/sorry-message'
import { SandwichModule } from '../sandwich/sandwich.module'
import { SandwichFormComponent } from '../sandwich/sandwich-form/sandwich-form.component';
import { SandwichListComponent } from '../sandwich/sandwich-list/sandwich-list.component';

// Routes configuraton for restaurants application: list all paths available
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'sandwiches', component: SandwichListComponent },
    { path: 'creator', component: SandwichFormComponent },
    { path: 'restaurants/:id', component: RestaurantDetailsComponent }, //router will pay attention what id is requested & will pass service
    { path: '**', component: SorryMessageComponent }
];

@NgModule({
  declarations: [   //component, directive, pipe
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    RestaurantsComponent,
    RestaurantDetailsComponent,
    SorryMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SandwichModule,
  ],
    providers: [RestaurantsService],    //all services
  bootstrap: [AppComponent] //use once to start app work by initializing the component
})
export class AppModule { }
