namespace constants {

    export enum event {
        WELCOME = 1
    }
    export enum role {
        MAPPER = 1
    }
    export enum HttpStatus {
        OK = 200,
        NO_CONTENT = 204,
        NOT_MODIFIED = 304,
        BAD_REQUEST = 400,
        FORBIDDEN = 403,
        NOT_FOUND = 404,
        REQUEST_TOO_LONG = 413,
        IM_A_TEAPOT = 418,
        INTERNAL_SERVER_ERROR = 500
    }
};
export default constants;