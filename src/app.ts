import "dotenv/config";
import express from "express";
import cors from 'cors';
import Routes from './routes';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server iniciado en el server ${PORT}`);
})

