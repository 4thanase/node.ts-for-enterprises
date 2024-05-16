import {NextFunction, Response} from 'express';

abstract class Base {
    protected SUCCESS_CODE: number = 200;
    protected NOT_FOUND_RESOURCE_CODE: number = 404;
    protected INTERNAL_SERVER_ERROR_CODE: number = 500;
    protected SUCCESS_MSG: string = 'success';
    protected NOT_FOUND_RESOURCE_MSG: string = ' resources not found';
    protected INTERNAL_SERVER_ERROR_MSG: string = ' internal sever error';


    protected response( res: Response, code:number, message: string, data: object){
        const dto : any ={
            status: code, message
        }

        if (data) dto.data = data;
        return res.status(code).json(dto);
    }

}

export default Base;
