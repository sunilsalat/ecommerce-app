import { BaseError } from "./baseError";

export class BadRequest extends BaseError {
    statusCode = 400;
    constructor(message: string) {
        super(message);
    }
    serializeError(): { message: string; field?: string | undefined }[] {
        return [{ message: this.message }];
    }
}
