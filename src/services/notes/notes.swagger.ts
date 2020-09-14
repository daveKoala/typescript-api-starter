export const getNotesAll = {
  parameters: [
    {
      name: 'Accept-version',
      in: 'header',
      description: 'API Version',
      required: true,
      schema: {
        type: 'string',
        example: 'Apple',
        nullable: true,
      },
    },
  ],
  tags: ['health check', 'apple', 'orange'],
  description: 'Returns infomation on the server status',
  produces: ['application/json'],
  summary: '',
  operationId: 'getPingz',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Server info',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Note',
            },
          },
        },
      },
    },
    400: {},
  },
};
