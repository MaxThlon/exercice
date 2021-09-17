import { Subject } from 'rxjs';

export enum EMenuItemType {
    Branch = 'branch',
    Route = 'route',
    Observable = 'observable',
    Function = 'function',
    ServiceMethod = 'service-method'
}

export interface MenuItem {
    menuItemType: EMenuItemType;
    translation: string;
    disabled?: boolean;
    iconName: string;
}

export interface MenuItemBranch extends MenuItem {
    children?: MenuItemList;
}

export interface MenuItemRoute extends MenuItem {
    route?: string;
}

export interface MenuItemObservable extends MenuItem {
	observable: any;
}

export interface MenuItemFunction extends MenuItem {
	parameters?: any;
	function: any;
}

export interface MenuItemServiceMethod extends MenuItem {
    serviceType: any;
    methodName: string;
    methodParameterArray?: any[];
}

export interface MenuItemList extends Array<MenuItemBranch |
                                            MenuItemRoute |
                                            MenuItemObservable |
                                            MenuItemFunction |
                                            MenuItemServiceMethod> {}

export interface MenuVisibleChange {
	nzVisibleChange: boolean;
	menuItemList$: Subject<MenuItemList>;
}
