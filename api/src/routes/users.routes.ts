import {Router, Request, Response} from 'express';
import { createUserControler, deleteUserController, getUserByIdController, getUsersController, updateUserController } from '../controllers/users.controllers';


const router = Router()

// Users routes
router.get('/', (req: Request, res: Response) => {
    getUsersController(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    getUserByIdController(req, res);
});

router.post('/', (req: Request, res: Response) => {
    createUserControler(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
    updateUserController(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
    deleteUserController(req, res);
});

export default router;