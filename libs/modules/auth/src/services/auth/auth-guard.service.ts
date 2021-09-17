import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface AuthGuardService {

	isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
