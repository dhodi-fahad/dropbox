import {Router, Request, Response} from 'express';


const router = Router()

// Home routes
router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})


export default router;