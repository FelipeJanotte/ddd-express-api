import { Request, Response } from 'express';

class FirstController {
	HelloWorld (req: Request, res: Response) {
		return res.json({
			message: 'Hello World'
		});
	}
}

export const firstController = new FirstController();