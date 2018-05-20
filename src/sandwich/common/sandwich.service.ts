import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sandwich } from '../sandwich';

@Injectable()
export class SandwichService {

    private apiUrl: string = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) { }

    public postSandwich(sandwich: Sandwich): any {
        return this.httpClient.post(`${this.apiUrl}/sandwiches`, sandwich);
    }

    public getSandwiches(query?: string, order: string = 'asc'): any { 
        //? means query is optional parameter; undefined if not provided
        if(query === undefined){
            return this.httpClient.get(`${this.apiUrl}/sandwiches?_sort=name&_order=${order}`);  //sort alphabetically, ascending / descending
        } else {
            return this.httpClient.get(`${this.apiUrl}/sandwiches?q=${query}&_sort=name&_order=${order}`);  //return those which have this name only
        }
    }

    public getSandwich(id: number): any {
        return this.httpClient.get(`${this.apiUrl}/sandwiches/${id}`);
    }

    public deleteSandwich(id: number): any {
        return this.httpClient.delete(`${this.apiUrl}/sandwiches/${id}`);
    }
}