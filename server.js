import express from "express";
const app = express();
const port = 3000; // Porta que o servidor irá ouvir

app.get("/", (req, res) => {
  res.send("Olá do Backend com Node.js e Express!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
