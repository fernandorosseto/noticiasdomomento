import { query } from "../config/db.js";

export const getLatestNews = (req, res) => {
  const sql = "SELECT * FROM news ORDER BY id DESC LIMIT 1";
  query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar a última reportagem", details: err });
    }
    // Renderiza a página index passando os dados da última reportagem
    res.render("index", { news: results[0] });
  });
  console.log("teste newsControllers")
};