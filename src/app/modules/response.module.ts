import {Request , Response} from "express";

function success(req: Request, res: Response, message: any, status?: number){
    let StatusCode: number = status || 200
    
    res.status(StatusCode)
    .send({
        error: "",
        status: StatusCode,
        message: message
    });

}

function error(req: Request, res: Response, message: any, status?: number){
    let StatusCode: number = status || 500
        
    res.status(StatusCode)
    .send({
        error: message,
        status: StatusCode,
        message: ""
    });
}

export default {success, error};