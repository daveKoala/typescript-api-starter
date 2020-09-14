import { getPingz } from '../../pingz/pingz.swagger';
import { getNotesAll } from '../../notes/notes.swagger';
import { info, servers, securitySchemes } from './common';
import { Pingz, User, Note, Deleted } from './common/schemas';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: { ...info, version: 'Orange' },
  servers,
  components: {
    schemas: {
      Pingz,
      User,
      Note,
      Deleted,
    },
  },
  securitySchemes,
  tags: [],
  paths: {
    '/pingz': {
      get: getPingz,
    },
    '/notes/all': {
      get: getNotesAll,
    },
  },
};
