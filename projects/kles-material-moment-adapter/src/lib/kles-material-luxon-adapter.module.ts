import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [];

const directives = [];
const pipes = [];
@NgModule({
    declarations: [
        components,
        directives,
        pipes
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        pipes
    ],
    exports: [
        components,
        pipes,
        directives,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class KlesMaterialLuxonAdapterModule {
    static declarations = [
        components,
        directives,
        pipes
    ];
}
