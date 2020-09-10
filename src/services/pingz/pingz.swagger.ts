export const getPingz = {
  tags: ['health check'],
  description: "Returns infomation on the server status",
  operationId: 'getPingz',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    "200": {
      description: "Server info",
      "content": {
        "application/json": {
          schema: {
            type: "object",
            example: {
              appName: "the app name",
              dateTime: new Date().toISOString(),
              apiDocs: "/api-docs"
            },
            properties:
            {
              appName: {
                type: "string"
              },
              dateTime: {
                type: "string",
                description: "Server date time"
              },
              apiDocs: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }
} 