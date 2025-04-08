import express from "express";
import cors from "cors";
import newsRouter from "./routes/newsRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajusta o caminho para que a pasta 'public' seja considerada no diretório pai de 'src'
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
app.use(express.json());
app.use(cors());

// Se deseja servir o index.html automaticamente, use:
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.use("/news", newsRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
