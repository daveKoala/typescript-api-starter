import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { setAPIVersion } from "./middleware/setAPIVersion";
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()).use(helmet()).use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setAPIVersion);

export default app;
