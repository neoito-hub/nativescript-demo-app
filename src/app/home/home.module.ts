import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToggleComponent } from './../toggle/toggle.component';
import { SliderComponent } from './../slider/slider.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [HomeComponent, ToggleComponent, SliderComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
