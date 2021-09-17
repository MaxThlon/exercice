import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import {
    EMenuItemType,
    MenuItemList
} from '@maxthlon/components/menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'knowledge';

    menuItemList: MenuItemList = [
    {
        menuItemType: EMenuItemType.Branch,
        translation: 'Group',
        iconName: 'group',
        children: [
        {
            menuItemType: EMenuItemType.Route,
            translation: 'GroupList',
            iconName: 'group',
            route: 'grouplist'
        },
        {
            menuItemType: EMenuItemType.Route,
            translation: 'GroupList',
            iconName: 'group2',
            route: 'grouplist2'
        }
      ]
    },
    {
        menuItemType: EMenuItemType.Route,
        translation: 'Logout',
        iconName: 'logout',
        route: 'logout'
    }];

    constructor() {}
}
