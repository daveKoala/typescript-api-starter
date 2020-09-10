import { getPingz } from "./services/pingz/pingz.swagger";

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'your description here',
    termsOfService: '',
    contact: {
      name: 'Dave Clare',
      email: 'mr.d.clare@gmail.com',
      url: 'https://koala-moon.com'
    },
    // license: {
    //   name: 'Apache 2.0',
    //   url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    // }
  },
  servers: [
    {
      url: 'http://localhost:3000/api/',
      description: 'Local server'
    },
    {
      url: 'https://test.herokuapp.com/api/',
      description: 'DEV Env'
    },
    {
      url: 'https://prod.herokuapp.com/api/',
      description: 'UAT Env'
    }
  ],
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  tags: [],
  paths: {
    "/pingz": {
      "get": getPingz
    }
  }
}