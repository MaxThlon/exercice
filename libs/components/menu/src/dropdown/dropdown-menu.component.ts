import { Component, Output, ContentChild, TemplateRef, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItemList, MenuVisibleChange } from '../menu-item';

@Component({
	selector: 'mt-dropdown-menu',
	templateUrl: './dropdown-menu.component.html'
})
export class DropdownMenuComponent {
	menuItemList$: Subject<MenuItemList> = new Subject();
	@Output() menuVisibleChange: EventEmitter<MenuVisibleChange> = new EventEmitter();
	@ContentChild('content', { static: false }) templateRefContent: TemplateRef<any>;

	constructor() {}

	showMenu(nzVisibleChange: boolean) {
		this.menuVisibleChange.emit({
			nzVisibleChange: nzVisibleChange,
			menuItemList$: this.menuItemList$
		});
	}
}
