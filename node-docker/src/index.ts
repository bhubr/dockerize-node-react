import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { port, reactAppOrigin } from './config'

process.on('SIGINT', () => {
  console.log('Received SIGINT.');
  process.exit();
});
//
const app = express();

app.use(morgan('dev'));
const corsOptions = {
  origin: reactAppOrigin
};
app.use(cors(corsOptions));

app.get('/message', (req, res) => res.send({
  message: 'Hello from Node.js'
}));

app.listen(port, () => console.log(`listening on ${port}`));
