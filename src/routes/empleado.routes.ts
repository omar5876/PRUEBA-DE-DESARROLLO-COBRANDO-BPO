import { Router } from 'express';
import { createEmpleado, deleteEmpleado, getEmpleado, updateEmpleado } from '../controllers/empleado.controller';


const router = Router();

router.get('/:codigo', getEmpleado);
router.post('/', createEmpleado);
router.put('/:codigo', updateEmpleado);
router.delete('/:codigo', deleteEmpleado);



export default router;