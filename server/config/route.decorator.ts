import { Router } from 'express';
export const appRouter = Router();
interface IOptions {
    path: string;
    middlewares?: any[],
}
const GET = (options:IOptions)=>{
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        (appRouter as any)['get'](options.path, target[propertyKey]);
    };
}
const POST = (options:IOptions)=>{
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        (appRouter as any)['post'](options.path, target[propertyKey]);
    };
}
const PATCH = (options:IOptions)=>{
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        (appRouter as any)['patch'](options.path, target[propertyKey]);
    };
}
export {GET, POST, PATCH}


