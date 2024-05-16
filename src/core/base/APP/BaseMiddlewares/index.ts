import { Response} from 'express';
import Base from '../main';

abstract class Base_middleware_service extends Base{
    protected async adpter(service: void | PromiseLike<void>, res: Response){
        try {
            await service
        } catch (err) {
            this._BAD_REQUEST(res);
        }
    }

    protected _BAD_REQUEST<T>(res: Response): Response{
        return this._error(
            res,
            this.BAD_REQUEST_CODE,
            this.BAD_REQUEST_MSG
        );
    }
}

export default Base_middleware_service;
