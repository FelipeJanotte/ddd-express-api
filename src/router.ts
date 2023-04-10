import { Router } from 'express';
import { firstController } from './Application/controllers/FirstController';
import { userController } from './Application/controllers/UserController';

const router = Router();

// [GET] - / 
router.get('/', firstController.HelloWorld);

// [GET] - /users
router.get('/users', (req, res) => userController.GetAll(req, res));
// [GET] - /user/:id
router.get('/user/:id', (req, res) => userController.GetById(req, res));
// [POST] - /user
router.post('/user', (req, res) => userController.Insert(req, res));
// [DELETE] - /user/:id
router.delete('/user/:id', (req, res) => userController.Delete(req, res));
// [PUT] - /user
router.put('/user', (req, res) => userController.Update(req, res));

export { router };