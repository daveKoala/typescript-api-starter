export const infoBlock = {
  tags: ['notes'],
  description: '',
  produces: ['application/json'],
  summary: 'Notes',
  // operationId: 'getPingz',
  security: [
    {
      bearerAuth: [],
    },
  ]
};
export const notes = {
  '/note/all': {
    get: {
      ...infoBlock,
      description: "Get all notes",
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
      responses: {
        '200': {
          description: 'Collection of notes',
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
    }
  },
  '/note/{note_id}': {
    get: {
      ...infoBlock,
      description: "Get note by ID",
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
        {
          name: 'note id',
          in: 'params',
          description: 'Note ID',
          required: true,
          schema: {
            type: 'string',
            example: '12345-6789'
          },
        },
      ],
      responses: {
        '200': {
          description: 'Collection of notes',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Note',
              },
            },
          },
        },
        400: {},
      },
    },
    delete: {
      ...infoBlock,
      description: "Delete note by ID",
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
        {
          name: 'note id',
          in: 'params',
          description: 'Note ID',
          required: true,
          schema: {
            type: 'string',
            example: '12345-6789'
          },
        },
      ],
      responses: {
        '200': {
          description: 'Collection of notes',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Note',
              },
            },
          },
        },
        400: {},
      },
    },
    put: {
      ...infoBlock,
      description: "Update note by ID",
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
        {
          name: 'note id',
          in: 'params',
          description: 'Note ID',
          required: true,
          schema: {
            type: 'string',
            example: '12345-6789'
          },
        },
      ],
      responses: {
        '200': {
          description: 'Collection of notes',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Note',
              },
            },
          },
        },
        400: {},
      },
    },
    head: {
      ...infoBlock,
      description: "Validate note exists by ID",
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
        {
          name: 'note id',
          in: 'params',
          description: 'Note ID',
          required: true,
          schema: {
            type: 'string',
            example: '12345-6789'
          },
        },
      ],
      responses: {
        '200': {
          description: 'Note is found',
        },
        400: {},
      },
    },
  }
};
