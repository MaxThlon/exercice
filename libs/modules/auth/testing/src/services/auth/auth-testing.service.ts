import { AuthService } from '@maxthlon/modules/auth';

export class AuthTestingService implements AuthService {
	constructor() {}

	public async logout(): Promise<boolean> {
		return true;
	}
}
