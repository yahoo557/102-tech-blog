import {Request, Response, NextFunction} from "express-serve-static-core";
export class TagMiddleware {
    checkTemplateNameEmpty = (req:Request,res:Response,next:NextFunction) =>{
        if(!req.body.templateName) return res.send(400).send("err: Template name is empty")
        next()
    }
    checkTemplateNameInvalid = (req:Request,res:Response,next:NextFunction) =>{

    }

}
