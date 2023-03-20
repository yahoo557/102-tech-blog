import winston from "winston";
import {Request, Response} from "express-serve-static-core";
import {GET,POST,PATCH} from "../../../config/route.decorator"
export class TagController {
    private setLogger = (message:string, level:number) =>{
        const logger = winston.createLogger({

        })
    }

    readTagTemplate = (req:Request, res:Response) =>{
        const result = ""
        return res.status(200).send(`OK :  ${result}`)
    }

    createTagTemplate = (req:Request,res:Response) =>{

        return res.status(200).send("OK : Create tag template");
    }

    updateTagTemplate = (req:Request, res:Response) =>{

        return res.status(200).send("OK : Update tag template");
    }

    deleteTagTemplate = (req:Request, res:Response) =>{

        return res.status(200).send("OK : Delete tag template");
    }
}
