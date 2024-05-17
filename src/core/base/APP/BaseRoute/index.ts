import { Application } from 'express';
import Base  from '../main';

abstract class Base_route extends Base{
    protected ALL: string = '*';

    protected abstract SP: String;
    protected abstract VERSION: string;

    public abstract run( app: Application): void;

}

export default Base_route;
