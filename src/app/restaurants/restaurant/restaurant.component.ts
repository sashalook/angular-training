import {Component, Input} from '@angular/core';
import {Restaurant} from '../restaurants.component'

@Component({
    selector:'re-restaurant',
    templateUrl:'./restaurant.component.html'
    styleUrls: ['./restaurant.component.css']

})

export class RestaurantComponent {
   @Input() public restaurant: Restaurant;
}