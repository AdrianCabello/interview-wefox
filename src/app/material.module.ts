import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule 
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule
    ],
    providers: [
    ],
})
export class MaterialModule { }