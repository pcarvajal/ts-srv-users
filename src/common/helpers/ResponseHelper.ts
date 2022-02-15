import {IErrorResponse, Response} from "../../entity/common/Response";

export default class ResponseHelper {

    code: number;
    description: string;

    constructor(code: number, description: string) {
        this.code = code;
        this.description = description;
    }

    successResponse(data: any): Response<any>{
        return {
            code: this.code,
            description: this.description,
            data: data
        };
    }

    errorResponse(error: any): IErrorResponse{

        let errorMessage: string;

        if(error instanceof Error){
            errorMessage = error.message;
        }else{
            errorMessage = error;
        }

        return {
            code: this.code,
            error: this.description,
            description : errorMessage
        }
    }
}
