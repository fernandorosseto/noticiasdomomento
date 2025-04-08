import { query } from "../config/db.js";

export const getLatestNews = (req, res) => {
  const sql = "SELECT * FROM news ORDER BY id DESC LIMIT 1";
  query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar a última reportagem", details: err });
    }
    if (!results.length) {
      return res.status(404).json({ message: "Nenhuma notícia encontrada." });
    }
    console.log("teste newsControllers");
    res.json(results[0]);
  });
};
