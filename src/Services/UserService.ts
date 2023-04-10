import * as Repository from '../Data/db';
import { UserDto } from '../Domain/Dtos/UserDto';
import { IUserService } from '../Domain/Interfaces/User/IUserService';
import { Guid } from 'js-guid';

export class UserService implements IUserService {
	private _repository: UserDto[];

	constructor () {
		this._repository = Repository.Users;
	}

	Get (id: string){
		const user = this._repository.find((user) => user.id === id);
		if (!user) {
			throw new Error('User not founded!');
		}

		return user;
	}
	
	GetAll() {
		return this._repository;
	}
	
	Insert (user: UserDto) {
		if (this._repository.some(u => u.id === user.id)) {
			throw new Error('A user already have this \'ID\'');
		}

		if (Guid.EMPTY === user.id || !user.id) {
			user.id = Guid.newGuid().toString();
		}

		this._repository.push(user);
		return user;
	}

	Delete (id: string) {
		const indexOfUser = this._repository.findIndex(user => user.id === id);
		if (indexOfUser < 0) {
			throw new Error('User not founded!');
		}
		this._repository.splice(indexOfUser, 1);
		return true;
	}

	Update (user: UserDto) {
		if (!user.id) {
			throw new Error('Object Reference is not defined!\n\'ID\' must not be null!');
		}
		
		const indexOfUser = this._repository.findIndex(u => u.id === user.id);
		if (indexOfUser < 0) {
			throw new Error('User not founded!');
		}

		this._repository.splice(indexOfUser, 1, user);

		return user;
	}
}