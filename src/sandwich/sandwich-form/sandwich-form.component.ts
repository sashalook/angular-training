import {Component} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Ingredient } from '../sandwich';
import { SandwichService } from '../common/sandwich.service';

// name must end with "sandwich" (i -> case-insensitive)
const SANDWICH = /sandwich$/i;

@Component({
    selector: 'gog-sandwich-form',
    templateUrl: './sandwich-form.component.html',
    styleUrls: ['./sandwich-form.component.css']

})
export class SandwichFormComponent {
    public sandwichForm: FormGroup;
    public showErrors: boolean = false;

    public ingredients: Ingredient[] = [
        { name: 'lettuce', fresh: true },
        { name: 'cheese', fresh: true },
        { name: 'ham', fresh: true },
        { name: 'tomato', fresh: true },
        { name: 'tuna', fresh: true },
    ]

    constructor(private formBuilder: FormBuilder, private sandwichService: SandwichService) {}

    public ngOnInit(): void {
        this.sandwichForm = this.createSandwichForm();
    }

    public submit(): void {
        this.showErrors = true;

        if(this.sandwichForm.valid){
            const sandwich = this.sandwichForm.getRawValue();
            console.log(sandwich);
            this.sandwichService.postSandwich(sandwich).toPromise()
                .then(() => {
                    console.log('EVERYTHING IS GREAT');
                    this.showErrors = false;    //to allow reset without errors
                    this.sandwichForm.reset();  //reset form after filling it in
                }
                )
                .catch(() => console.log('SOMETHING WENT WRONG')
                )
        }
    }

    private createSandwichForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(SANDWICH)]],    //1st value is default (''), then validators that are required
            sauce: ['', Validators.required],
            ingredients: ['', Validators.required],
            grilled: [false],
            price: [null, Validators.required],
        });
    }
}