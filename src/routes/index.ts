import { Router } from 'express';
import empleadoRouter from './empleado.routes'
const router = Router();



router.use('/empleado', empleadoRouter);

export default router;