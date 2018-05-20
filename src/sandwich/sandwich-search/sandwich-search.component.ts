// sandwich-list.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gog-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.css']
})
export class SandwichSearchComponent implements OnInit {
    //read about Generics in TypeScript
    //This lets us push search input value to sandwich-list.component
    @Output() public searchText: EventEmitter<string> = new EventEmitter();
    
    public query: string = '';
    public ngOnInit(): void {}

    public onChange(event): void {
        //target - the element in which the change happened
        //value - value of element (input)
        this.query = event.target.value;
        console.log(event.target.value);
    }

    public search(): void {
        this.searchText.emit(this.query);   //emit what user provided in search query
    }
}