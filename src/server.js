import express from "express";
import newsRouter from "./routes/newsRoutes.js";

const app = express();
const port = 3000; // Porta que o servidor irá ouvir

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Olá do Backend com Node.js e Express!");
});

app.use("/news", newsRouter)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  
});