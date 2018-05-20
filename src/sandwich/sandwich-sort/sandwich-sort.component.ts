// sandwich-sort.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SandwichService } from "../common/sandwich.service";
import { Sandwich } from "../sandwich";

@Component({
    selector: 'gog-sandwich-sort',
    templateUrl: './sandwich-sort.component.html'
})
export class SandwichSortComponent implements OnInit {

    @Output() public sort: EventEmitter<string> = new EventEmitter();

    public order: string = 'asc';

    public ngOnInit(): void {}

    public onClick(): void {
        //ternary operator: if 1st expression is true (asc), then take 1st value after ?. If it's NOT asc, then take 2nd value after ?.
        this.order = this.order === 'asc' ? 
        'desc' : 
        'asc';
        
        this.sort.emit(this.order);
    }
}