import { KlesMaterialDatepickerModule, KlesMatDateAdapter } from '@3kles/kles-material-datepicker';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LuxonDateAdapter } from '@angular/material-luxon-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatLabel, MatHint, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { KlesMatLuxonAdapter, KLES_MAT_LUXON_FORMATS } from 'kles-material-luxon-adapter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatHint,
        MatSuffix,
        MatDatepickerModule,
        KlesMaterialDatepickerModule
    ],
    providers: [
        { provide: KlesMatDateAdapter, useClass: KlesMatLuxonAdapter },
        { provide: DateAdapter, useClass: LuxonDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: KLES_MAT_LUXON_FORMATS }
    ]
})
export class AppComponent {
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            date: new FormControl()
        });

        this.form.valueChanges.subscribe((value) => console.log('form value change!', value));
    }
}
