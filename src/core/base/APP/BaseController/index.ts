import {Request, Response} from 'express';
import Base from '../main';

abstract class Base_Controller extends Base{

    constructor(){
        super()
    }

    protected abstract module( req: Request, res: Response): Promise<void | any>

    public async execute( req: Request, res: Response): Promise<void | any>{
        try{
            await this.module(req, res);
        }catch(err){
            this._OPS(res);
        }
    }
    protected _OK<T>(res:Response, data:{}): Response{
        if(!data){
            return this._response(
                res,
                this.SUCCESS_CODE,
                this.SUCCESS_MSG,
                data
            );
        }

        return this._error(
            res,
            this.SUCCESS_CODE,
            this.SUCCESS_MSG,
        )
       
    }


    protected _OPS<t>(res: Response): Response{
        return this._error(
            res,
            this.INTERNAL_SERVER_ERROR_CODE,
            this.INTERNAL_SERVER_ERROR_MSG, 
        );
    }

    protected _NOT_FOUND<t>(res: Response):Response{
        return this._error(
            res,
            this.NOT_FOUND_RESOURCE_CODE,
            this.NOT_FOUND_RESOURCE_MSG
        )
    }
}

export default Base_Controller;
