import { Component, Input, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EMenuItemType, MenuItemList, MenuItemFunction, MenuItemObservable } from '../menu-item';

@Component({
	selector: 'mt-menu',
	templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
	EEMenuItemType = EMenuItemType;
	@Input() menuItemList$: Observable<MenuItemList>;

	constructor(protected injector: Injector, protected router: Router) {}

	ngOnInit() {}

	get context() {
		return this;
	}

	callFunction(event, menuItem: MenuItemFunction) {
		menuItem.function(event, menuItem);
	}

	callObservable(event, menuItem: MenuItemObservable) {
		menuItem.observable.subscribe(subscriber => {
			subscriber.next();
			subscriber.complete();
		});
	}
}
