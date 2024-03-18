import "dotenv/config";
import express from "express";
import cors from "cors";
import Routes from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

db().then(() => console.log("Connection ready"));

app.listen(PORT, () => {
  console.log(`Server iniciado en el server ${PORT}`);
});
