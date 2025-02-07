import { query, end } from "./db.js";

// Consulta simples ao banco de dados
query("SELECT * FROM news", (err, results) => {
  if (err) {
    console.error("Erro ao buscar usuários:", err);
    return;
  }
  console.log("Matérias cadastradas:", results);

  // Fechar a conexão após a consulta
  end();
});
