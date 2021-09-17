import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './menu/menu.component';
import { DropdownMenuComponent } from './dropdown/dropdown-menu.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		TranslateModule,
		NzMenuModule,
        NzDropDownModule
	],
	declarations: [
		MenuComponent,
		DropdownMenuComponent
	],
	exports: [
		DropdownMenuComponent
	]
})
export class MtMenuModule {}
