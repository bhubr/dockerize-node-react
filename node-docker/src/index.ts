import express from 'express';
import cors from 'cors';

import { port, reactAppOrigin } from './config'

const app = express();
const corsOptions = {
  origin: reactAppOrigin
};
app.use(cors(corsOptions));

app.get('/message', (req, res) => res.send({
  message: 'Hello from Node.js'
}));

app.listen(port, () => console.log(`listening on ${port}`));
