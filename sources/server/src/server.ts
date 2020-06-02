import express from 'express';
import routes from './routes';

const APP_PORT = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`[*] Server running on port: ${APP_PORT}`);
});
