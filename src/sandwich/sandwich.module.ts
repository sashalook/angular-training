import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SandwichFormComponent } from './sandwich-form';
import { SandwichService } from './common';
import { SandwichListComponent } from './sandwich-list';
import { SandwichSearchComponent } from './sandwich-search'
import {SandwichSortComponent} from './sandwich-sort'

@NgModule({
    declarations: [ //components/directives/pipes 
        SandwichFormComponent,
        SandwichListComponent,
        SandwichSearchComponent,
        SandwichSortComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [SandwichService],
    exports: [
        SandwichFormComponent,
        SandwichListComponent,
        SandwichSortComponent
    ]
})
export class SandwichModule { }