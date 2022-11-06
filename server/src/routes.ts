import { Router } from 'express';
import { CreateCollegeController } from './controllers/CreateCollegeController';
import { CreateDocumentController } from './controllers/CreateDocumentController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetCollegeController } from './controllers/GetCollegeController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { GetUserController } from './controllers/GetUserController';
import { GetDocumentsFromUserController } from './controllers/GetDocumentsFromUserController';

const router = Router();

// POSTS
router.post("/users", new CreateUserController().handle);
router.post("/documents", new CreateDocumentController().handle);
router.post("/colleges", new CreateCollegeController().handle);

router.get("/colleges", new GetCollegeController().handle);
router.get("/users", new GetAllUsersController().handle);

router.get("/users/:id", new GetUserController().handle);
router.get("/documents/:id", new GetDocumentsFromUserController().handle)


export { router }