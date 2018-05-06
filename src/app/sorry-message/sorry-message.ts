import { Component } from '@angular/core';

@Component({
    selector: 're-sorry-message',
    templateUrl: './sorry-message.html'
})

export class SorryMessageComponent {
    public title: string = 'Sorry, something went wrong';
}