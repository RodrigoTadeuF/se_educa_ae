import { Router } from 'express';
import { CreateDocumentController } from './controllers/CreateDocumentController';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/documents", new CreateDocumentController().handle);

export { router }