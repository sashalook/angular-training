// restaurants.service.ts

import { Injectable } from '@angular/core';
import { Restaurant } from './restaurants.component';

@Injectable()
export class RestaurantsService {
    public restaurants: Restaurant[] = [
        { id: 1, name: 'McDonald\'s', rating: 1.5, dishes: ['BigMac', 'Fries', 'Coke', 'McNuggets'] },
        { id: 2, name: 'Burger King', rating: 2.2, dishes: ['Whopper', 'Fries', 'Coke', 'Salad'] },
        { id: 3, name: 'Bema', rating: 4.1, dishes: ['salat', 'sandwich', 'pasteis de nata'] },
        { id: 4, name: 'Campo', rating: 5.0, dishes: ['steak', 'tartar', 'ice cream'] },
        { id: 5, name: 'Szjanochy 11', rating: 4.5, dishes: ['sushi', 'maki', 'miso', 'seaweed'] },
        { id: 6, name: 'Kres', rating: 4.3, dishes: ['Kiewski cake', 'pelmeni', 'shuba', 'plow'] },
        { id: 7, name: 'Charlotte', rating: 4.2, dishes: ['croissant', 'wino', 'Omlet francuski'] }
    ];
}