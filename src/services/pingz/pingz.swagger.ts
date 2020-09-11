export const getPingz = {
  parameters: [
    {
      name: "Accept-version", 
      in: "header", 
      description: "API Version",
      required: true,
      schema: {
        type: "string",
        example: "v2",
        nullable: true,
      }
    }
  ],
  tags: ['health check'],
  description: 'Returns infomation on the server status',
  summary: "",
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
            type: 'object',
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
        },
      },
    },
  },
};
