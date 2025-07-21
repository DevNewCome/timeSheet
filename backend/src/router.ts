import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { UserAuthController } from "./controllers/user/UserAuthController";
import { UserDetailController } from "./controllers/user/UserDetailController";
import { isAuth } from "./middlewares/isAuth";
import { CreatePointController } from "./controllers/timePointer/CreateTimePointController";
import { ListTimePointController } from "./controllers/timePointer/ListTimePointController";
const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/session', new UserAuthController().handle)
router.get('/userdetail', isAuth, new UserDetailController().handle)
router.post('/createpoint', isAuth, new CreatePointController().handle)
router.get('/allusers', isAuth, new ListTimePointController().handle) 

export { router }