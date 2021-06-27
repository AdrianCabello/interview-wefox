import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        MatCardModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
    providers: [
    ],
})
export class MaterialModule { }