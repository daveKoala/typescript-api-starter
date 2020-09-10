"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
exports.errors = {
    notFound: {
        id: 'not_found',
        message: 'The resource you were accessing cannot be found.',
    },
    badRequest: {
        id: 'bad_request',
        message: 'The request was invalid or cannot be otherwise served.',
    },
    unAuthorized: {
        id: 'unauthorized',
        message: 'Access is denied due to invalid credentials.',
    },
    forbidden: {
        id: 'forbidden',
        message: 'You do not have access for the attempted action.',
    },
    internalServerError: {
        id: 'internal_server_error',
        message: 'Something is broken.',
    },
    apiInvalid: {
        id: 'api_invalid_header',
        message: 'Check the request header defines the api version',
    },
};
//# sourceMappingURL=errorMessages.js.map