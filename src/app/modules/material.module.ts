import { PortalModule } from "@angular/cdk/portal";
import { CdkTableModule } from "@angular/cdk/table";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";



@NgModule({
    imports: [
        CommonModule,
        MatSliderModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatMenuModule,
        MatTabsModule,
        CdkTableModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatSortModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTreeModule,
        MatSliderModule,
        MatButtonModule,
        MatSlideToggleModule,
        PortalModule
    ],

    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatMenuModule,
        MatTabsModule,
        CdkTableModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatSortModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTreeModule,
        MatSliderModule,
        MatButtonModule,
        MatSlideToggleModule,
        PortalModule
    ],
    providers: [
        MatDatepickerModule,
        MatDialogModule
    ]
})

export class MaterialModule { }
