import { getPingz } from '../../pingz/pingz.swagger';
import { servers, info, securitySchemes } from './common';
export const swaggerDocument = {
  openapi: '3.0.1',
  info: { ...info, version: 'Apple' },
  servers,
  components: {
    schemas: {
      Pingz: {
        description: 'Health check and end point for K8 + basic service info',
        example: {
          appName: 'the app name',
          dateTime: new Date().toISOString(),
          apiDocs: '/api-docs',
        },
        properties: {
          appName: {
            type: 'string',
          },
          dateTime: {
            type: 'string',
            description: 'Server date time',
          },
          apiDocs: {
            type: 'string',
          },
        },
      },
      User: {
        properties: {
          id: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
        },
      },
    },
  },
  securitySchemes,
  tags: [],
  paths: {
    '/pingz': {
      get: getPingz,
    },
  },
};
