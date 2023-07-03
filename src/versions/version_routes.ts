import { Router } from "express";
import { errorHandler } from "../middleware/errorHanlder";
import routes from '../routes';

const versionRouter = Router();
versionRouter.use('/v1',routes)
versionRouter.use(errorHandler);

export default versionRouter;
