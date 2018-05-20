// sandwich-list.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { SandwichService } from "../common/sandwich.service";
import { Sandwich } from "../sandwich";
import { SandwichSearchComponent } from '../sandwich-search/index';
import { log } from 'util';

@Component({
    selector: 'gog-sandwich-list',
    templateUrl: './sandwich-list.component.html',
    styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent implements OnInit {
    
    @ViewChild(SandwichSearchComponent) sandwichSearch: SandwichSearchComponent;
    
    public sandwiches: Sandwich[];

    public searchText: string = '';

    constructor(private sandwichService: SandwichService) { }

    public ngOnInit(): void {
        this.updateListOfSandwiches();
    }

    public updateListOfSandwiches(searchText?: string, order?: string): void {
        this.sandwiches = this.sandwichService.getSandwiches(searchText, order);
    }

    public deleteSandwich(id: number): void {
        this.sandwichService.deleteSandwich(id).toPromise()
            .then(() => {
                console.log('SANDWICH HAS BEEN DELETED')
                this.updateListOfSandwiches()
            })
            .catch(() => console.log('SOMETHING WENT WRONG'));
    }

    public searchForSandwiches(searchText: string): void {
        // this.searchText = searchText
        this.updateListOfSandwiches(searchText);
        console.log(searchText);
    }

    public sortSandwiches(order: string): void {
        this.updateListOfSandwiches(this.searchText, order);
        console.log(this.sandwichSearch.query);
    }
}