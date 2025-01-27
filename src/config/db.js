import { createConnection } from "mysql2";

// Configuração da conexão com o banco de dados
const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "10-1=9",
  database: "trends_db",
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL com sucesso!");
});

// Função para executar consultas SQL
export function query(sql, callback) {
  connection.query(sql, callback);
}

// Função para fechar a conexão
export function end() {
  connection.end((err) => {
    if (err) {
      console.error("Erro ao fechar a conexão:", err);
    } else {
      console.log("Conexão encerrada.");
    }
  });
}
