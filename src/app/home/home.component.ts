// home.component.ts

import { Component } from '@angular/core';

@Component({
    selector: 're-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public title: string = 'Home';
}
