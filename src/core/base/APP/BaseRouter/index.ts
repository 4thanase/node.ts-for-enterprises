import { Router} from 'express';

abstract class Base_router {

    protected routerInstance: Router = Router();
    protected abstract composeRouterService: void;

}

export default Base_router;
