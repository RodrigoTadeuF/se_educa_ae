import { Router } from 'express';
import { CreateCollegeController } from './controllers/CreateCollegeController';
import { CreateDocumentController } from './controllers/CreateDocumentController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetCollegeController } from './controllers/GetCollegeController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { GetUserController } from './controllers/GetUserController';
import { GetDocumentsFromUserController } from './controllers/GetDocumentsFromUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { DeleteCollegeController } from './controllers/DeleteCollegeController';
import { DeleteDocumentController } from './controllers/DeleteDocumentController';

const router = Router();

//CREATES
router.post("/users", new CreateUserController().handle);
router.post("/documents", new CreateDocumentController().handle);
router.post("/colleges", new CreateCollegeController().handle);

//LISTS
router.get("/colleges", new GetCollegeController().handle);
router.get("/users", new GetAllUsersController().handle);

//LIST BY ID
router.get("/users/:id", new GetUserController().handle);
router.get("/documents/:id", new GetDocumentsFromUserController().handle)

//DELETE
router.delete("/users/:id", new DeleteUserController().handle);
router.delete("/documents/:id", new DeleteDocumentController().handle)
router.delete("/colleges/:id", new DeleteCollegeController().handle)


export { router }