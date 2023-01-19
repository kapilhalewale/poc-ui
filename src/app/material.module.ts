import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({

    imports: [
        MatToolbarModule, MatSliderModule, MatIconModule,
        MatButtonModule, MatMenuModule, MatTabsModule,
        MatTableModule, MatPaginatorModule, MatFormFieldModule,
        MatSortModule, MatCardModule, MatButtonToggleModule,
        MatSnackBarModule, MatSidenavModule, MatListModule,
        MatInputModule,MatRadioModule,MatSelectModule,
        MatStepperModule,MatBadgeModule,MatCheckboxModule,
        MatExpansionModule,MatChipsModule,
        FormsModule, ReactiveFormsModule,MatTooltipModule

    ],

    exports: [
        MatToolbarModule, MatSliderModule, MatIconModule,
        MatButtonModule, MatMenuModule, MatTabsModule,
        MatTableModule, MatPaginatorModule, MatFormFieldModule,
        MatSortModule, MatCardModule, MatButtonToggleModule,
        MatSnackBarModule, MatSidenavModule, MatListModule,
        MatInputModule,MatRadioModule,MatSelectModule,
        MatStepperModule,MatBadgeModule,MatCheckboxModule,
        MatExpansionModule,MatChipsModule,
        FormsModule, ReactiveFormsModule, MatTooltipModule

    ]

})

export class MaterialModule { }
