import { BaseError } from "./baseError";

export class NotAuthorize extends BaseError {
    statusCode = 401;
    constructor(message: string) {
        super(message);
    }

    serializeError(): { message: string; field?: string | undefined }[] {
        return [{ message: this.message }];
    }
}
