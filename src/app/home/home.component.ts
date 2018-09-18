import { Component } from '@angular/core';
import { Page } from 'ui/page';
import { LightColorData } from '../shared/model/home.model';
import { ColorOptions, FanOptions } from '../shared/enum/home.enum';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    lightColorData: LightColorData;
    colorTempRange: number[];
    colorOptions: string[];
    selectedColorSetting: string;
    fanOptions: string[];
    selectedFanSetting: string;

    constructor(page: Page) {
        page.actionBarHidden = true;
        this.colorOptions = [
            ColorOptions.COLOR,
            ColorOptions.GEL,
            ColorOptions.HUE
        ];
        this.fanOptions = [FanOptions.AUTO, FanOptions.FULL, FanOptions.OFF];
        this.colorTempRange = [2800, 10000];
        this.lightColorData = {
            colorTempValue: 2800,
            redValue: 0,
            greenValue: 0,
            blueValue: 0
        };
    }

    updateColorTempValue(colorTempValue: number) {
        this.lightColorData.colorTempValue = colorTempValue;
    }

    updateRedValue(colorRedValue: number) {
        this.lightColorData.redValue = colorRedValue;
    }

    updateGreenValue(colorGreenValue: number) {
        this.lightColorData.greenValue = colorGreenValue;
    }

    updateBlueValue(colorBlueValue: number) {
        this.lightColorData.blueValue = colorBlueValue;
    }

    updateColor(colorSetting: string) {
        this.selectedColorSetting = colorSetting;
    }

    updateFan(fanSetting: string) {
        this.selectedFanSetting = fanSetting;
    }
}
