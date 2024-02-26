import { Router } from 'express';
import { cidadesController } from '../controllers';

const router = Router();

// router.get('/cidades', cidadesController.getAll);
router.post('/cidades', cidadesController.create);

export { router };
