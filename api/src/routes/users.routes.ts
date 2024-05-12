import {Router, Request, Response} from 'express';
import { createUserControler, deleteUserController, getUserByIdController, getUsersController, updateUserController } from '../controllers/users.controllers';
import { validateUser } from '../utils/validations/users.validations';


const router = Router()

// Users routes
router.get('/', getUsersController);

router.get('/:id', getUserByIdController);

router.post('/', validateUser, createUserControler);

router.put('/:id', validateUser, updateUserController);

router.delete('/:id', deleteUserController);

export default router;