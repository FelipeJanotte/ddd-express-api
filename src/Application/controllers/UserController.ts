import { Request, Response } from 'express';
import { IUserService } from '../../Domain/Interfaces/User/IUserService';
import { UserService } from '../../Services/UserService';
import { UserDto } from '../../Domain/Dtos/UserDto';

class UserController {

	private _service: IUserService;

	constructor () {
		this._service = new UserService();
	}

	GetAll (req: Request, res: Response) {
		try {
			return res.json(this._service.GetAll());
		} catch (err) {
			res.json(err);
		}
	}

	Insert (req: Request, res: Response) {
		const data: UserDto = req.body;
		try {
			const user = this._service.Insert(data);
			return res.json(user);
		} catch (err) {
			res.json(err);
		}
	}

	GetById (req: Request, res: Response) {
		const data: string = req.params.id;

		try {
			const user: UserDto = this._service.Get(data);
			return res.json(user);
		} catch (err) {
			res.json(err);
		}
	}

	Delete (req: Request, res: Response) {
		const data: string = req.params.id;

		try {
			const hasDeleted: boolean = this._service.Delete(data);
			return res.json(hasDeleted);
		} catch (err) {
			return res.json(err);
		}
	}

	Update (req: Request, res: Response) {
		const data: UserDto = req.body;

		try {
			const user: UserDto = this._service.Update(data);
			return res.json(user);
		} catch (err) {
			return res.json(err);
		}
	}
}

export const userController = new UserController();