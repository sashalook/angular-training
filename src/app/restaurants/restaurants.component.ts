import {Component} from '@angular/core';
import { RestaurantsService } from './restaurants.service';

export interface Restaurant {
    id: number;
    name: string;
    rating: number;
    dishes: string[];
}

@Component({
    selector:'re-restaurants',
    templateUrl:'./restaurants.component.html',
    styleUrls: ['./restaurants.component.css']

})

export class RestaurantsComponent {  //all restaurants, inject service here via 'restaurants' variable
    public title: string = 'Restaurants List';
    constructor(public restaurantsService: RestaurantsService){}
}