import { IErrorResponse, GenericResponse } from "../entities/Response";

export default class ResponseHelper {
	code: number;
	description: string;

	constructor(code: number, description: string) {
		this.code = code;
		this.description = description;
	}

	successResponse(data: unknown): GenericResponse<unknown> {
		return {
			code: this.code,
			description: this.description,
			data: data,
		};
	}

	errorResponse(error: any ): IErrorResponse {
		let errorMessage;

		if (error instanceof Error) {
			errorMessage = error.message;
		} else if (typeof error === "string" ) {
			errorMessage = error;
		}else{
			errorMessage = error;
		}

		return {
			code: this.code,
			error: this.description,
			description: errorMessage,
		};
	}
}
