import {Component, Input} from '@angular/core';
import {Restaurant} from '../restaurants.component'
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { RestaurantsService } from '../restaurants.service';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
    selector:'re-restaurant-details',
    templateUrl:'./restaurant-details.component.html'
})

export class RestaurantDetailsComponent {
   public title: string = 'Restaurant Details';
   public restaurantDetails: Restaurant | undefined;

    constructor(public route: ActivatedRoute, public restaurantsService: RestaurantsService) {
        
        //Save a restaurant is from the URL params 
        const id: number = Number.parseInt(route.snapshot.params.id);   //parseInt creates number from id, '27' => 27
        
        //Find it in the restaurants array using this id
        this.restaurantDetails = restaurantsService.restaurants.find((r: Restaurant) => r.id === id);

        console.log(this.restaurantDetails);
    }
}
