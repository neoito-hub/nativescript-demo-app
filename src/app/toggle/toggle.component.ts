import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'toggle-group',
	moduleId: module.id,
	templateUrl: './toggle.component.html',
	styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
	selectedValue: string;
	@Input()
	inputTextOptions: string[] = [];
	@Output()
	emitUpdatedValue: EventEmitter<string> = new EventEmitter<string>();
	constructor() {
		this.selectedValue = '';
	}
	toggleClick(value: string) {
		this.selectedValue = value;
		this.emitUpdatedValue.emit(value);
	}
}
