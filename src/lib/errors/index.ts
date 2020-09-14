import BaseError from './baseError';
import InternalServerError from './internalServerError';
import APIInvalidHeader from './apiDocsError';
import NotFoundError from './notFoundError';
import ForbiddenError from './forbiddenError';
import APIDocs from "./apiDocsError";

export default {
  APIDocs,
  APIInvalidHeader,
  BaseError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
};
