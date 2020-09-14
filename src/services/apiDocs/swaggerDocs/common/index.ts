export const contact = {
  name: 'Dave Clare',
  email: 'mr.d.clare@gmail.com',
  url: 'https://koala-moon.com',
};

export const servers = [
  {
    url: 'http://localhost:3000/api/',
    description: 'Local server',
  },
  {
    url: 'https://test.koala-moon.com/api/',
    description: 'Test Env',
  },
  {
    url: 'https://prod.koala-moon.com/api/',
    description: 'Prod Env',
  },
];

export const license = {
  name: 'Apache 2.0',
  url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
};

export const info = {
  version: 'Orange',
  title: 'APIs Document',
  description: 'your description here',
  termsOfService: '',
  contact,
  license,
};

export const securitySchemes = {
  bearerAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  },
};
